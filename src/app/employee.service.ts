import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';
import { urls, columns } from './config';

const SLACK_GET_URL = urls.slack_get_names_url;

@Injectable()
export class EmployeeService {

  constructor(private http: Http) {}

  getUser(): Observable<Employee[]> {
    let access_token:string = location.hash.split('&')[0].split('=')[1];
    return this.http.get(urls.names_get_url + access_token)
                    .map(this.extractNameData)
                    .catch(this.handleError);
  }

  getSlackID(): Observable<any[]> {
    return this.http.get(SLACK_GET_URL)
                    .map(this.extractIDData)
                    .catch(this.handleError);
  }

  private extractNameData(res: Response) {
    console.log(res.json());
    return res.json().values.map(el => {
      return {
        name: el[columns.names_column],
        mail: el[columns.emails_column],
        roman_name: el[columns.roman_names_column]
      }
    }) || {};
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
