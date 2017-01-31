import { Component, OnInit } from '@angular/core';
import { urls } from '../config';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(location.hash == '') {
      location.href = urls.oauth_url;
    }
  }

}
