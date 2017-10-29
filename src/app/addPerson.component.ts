import { Component } from '@angular/core';
import { Person } from './persons';

import { NgForm } from '@angular/forms';

import { IPerson } from './ipersons';
import { PersonService } from './persons.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app-add',
  templateUrl: './html/add.html',
  styleUrls: ['./css/style.css'],
  providers: [PersonService]
})

export class AppAddPerson {

  messError = 'error message !!!!';

  messConfirmation = '';

  model = new Person(null, null, null, null);


  ipersons: IPerson[];

  constructor(private myService: PersonService) {
  }


  onSubmit(f: NgForm) {

    this.myService.addPerson(f.value);
    //this._person.updatePerson(f.value);

    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    this.messConfirmation = f.value.name + ' is added successfully';

    this.model = new Person(null, null, null, null);

  }



}

