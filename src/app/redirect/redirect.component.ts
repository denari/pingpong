import { Component, OnInit } from '@angular/core';
import { urls } from '../config';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    location.href = urls.oauth_url
  }

}
