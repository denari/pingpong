import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-general-button',
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.scss']
})
export class GeneralButtonComponent implements OnInit {

  constructor(private service:MessageService) { }

  ngOnInit() {
  }

  sendToriaezuMessage() {
    this.service.sendMessage('来客がきました');
  }

  sendPassengerMessage() {
    this.service.sendMessage('宅配がきました');
  }

}
