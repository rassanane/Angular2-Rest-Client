import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IPerson } from './ipersons';

import { RequestOptions, Request, RequestMethod, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class PersonService {

  private _personsurl = 'http://localhost:8080/jersey-swagger/rest/persons';
  //private _personsurl='app/persons.json';

  constructor(private _http: Http) { }
  /**
   * 
   */
  getpersons(): Observable<IPerson[]> {
    return this._http.get(this._personsurl)
      .map((response: Response) => <IPerson[]>response.json().result)	//result : le titre de la liste envoy�e par le serveur
      .do(data => console.log(JSON.stringify(data)));
  }

  addPerson(person:IPerson): number {

    console.log(person);

    let myHeaders = new Headers();
    //myHeaders.append('Access-Control-Allow-Origin', '*');  
    myHeaders.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: myHeaders });

    this._http.post(this._personsurl, person, options).subscribe();


    return 1;

  }

  updatePerson(person:IPerson): number {

    console.log(person);

    let myHeaders = new Headers();
    //myHeaders.append('Access-Control-Allow-Origin', '*');  
    myHeaders.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: myHeaders });

    this._http.put(this._personsurl, person, options).subscribe();


    return 1;

  }

  deletePerson(personId: number): number {

    console.log(personId);


    let myHeaders = new Headers();
    //myHeaders.append('Access-Control-Allow-Origin', '*');  
    myHeaders.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: myHeaders });

    this._http.delete(this._personsurl + '/' + personId + '', options).subscribe();

    return 1;

  }

  getperson(personId: number): Observable<IPerson> {
    return this._http.get(this._personsurl + "/" + personId)
      .map((response: Response) => <IPerson>response.json().result)	//result : le titre de la liste envoy�e par le serveur
      .do(data => console.log(JSON.stringify(data)));
  }

}






