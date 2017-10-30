import { Component } from '@angular/core';
import { Person } from './persons';

import { NgForm } from '@angular/forms';

import { IPerson } from './ipersons';
import { PersonService } from './persons.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'my-app-show',
    templateUrl: './html/show.html',
  styleUrls: ['./css/style.css'],
    providers: [PersonService]
})

/**
 * A class to call a service to show dtail of a persons
 */

export class AppShowPerson {

    model = new Person(1, 'toto', 30, 'fofo');

    personId: number;

    ipersons: IPerson[];

    constructor(private myService: PersonService, private activatedRoute: ActivatedRoute) {
    }


    ngOnInit(): void {

        this.activatedRoute.params.subscribe((params: Params) => {
            let personId = params['personId'];
            this.personId = personId;
            console.log("personId" + personId);
        });

        this.myService.getperson(this.personId)
            .subscribe(model => this.model = model);
    }


    messError = 'error message !!!!';



}




