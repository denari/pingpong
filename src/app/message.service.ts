import { Injectable } from '@angular/core';
import { Http, Response,  Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { urls } from './config';

const POST_URL = urls.slack_post_url;

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  sendMessage(message:string):any {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });

    this.http.post(POST_URL, encodeURI('payload={"text":"' + message + '"}'), options)
             .map(this.extractData)
             .catch(this.handleError)
             .subscribe(result => null);

  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
  }

  private handleError (error: any, caught: Observable<any>):any {
  }

}
