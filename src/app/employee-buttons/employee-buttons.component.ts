import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';
import { Employee } from '../employee';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-employee-buttons',
  templateUrl: './employee-buttons.component.html',
  styleUrls: ['./employee-buttons.component.scss'],
  providers: [ EmployeeService ]
})
export class EmployeeButtonsComponent implements OnInit {

  employees: Employee[] = [];
  mode = 'Observable';

  constructor(private employeeService:EmployeeService, private messageService:MessageService) {}

  ngOnInit() { this.getUser(); }

  getUser() {

    const getusers = this.employeeService.getUser()
    const getslackid = this.employeeService.getSlackID()

    Observable.zip(getusers, getslackid, (users, slackID) => {
      return {
        users: users,
        slackid: slackID
      };
    }).subscribe(res => {
      let slackArray:any[] = [];
      for(let slack of res.slackid) {
        if(slack.profile.email) {
          slackArray[slack.profile.email] = {
            image: slack.profile.image_192,
            slackid: slack.name
          };
        }
      }
      this.employees = res.users.map(employeeName => {
        return new Employee(
          employeeName.mail,
          employeeName.name,
          slackArray[employeeName.mail].slackid,
          slackArray[employeeName.mail].image
        );
      });
    });

  }

  sendPersonalMessage(slack_id) {
    this.messageService.sendMessage('@' + slack_id + ' さんに来客がきました');
  }

}
