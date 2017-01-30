import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';
import { urls } from './config';

const NAME_GET_URL = urls.names_get_url
const SLACK_GET_URL = urls.slack_get_names_url

@Injectable()
export class EmployeeService {

  constructor(private http: Http) {}

  getUser(): Observable<Employee[]> {
    return this.http.get(NAME_GET_URL)
                    .map(this.extractNameData)
                    .catch(this.handleError);
  }

  getSlackID(): Observable<any[]> {
    return this.http.get(SLACK_GET_URL)
                    .map(this.extractIDData)
                    .catch(this.handleError);
  }

  private extractNameData(res: Response) {
    return res.json() || {};
  }

  private extractIDData(res: Response) {
    return res.json().members || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
