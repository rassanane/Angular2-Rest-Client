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
    selector: 'my-app-update',
    templateUrl: './html/update.html',
  styleUrls: ['./css/style.css'],
    providers: [PersonService]
})

/**
 * A class to call a service to update a persons
 */

export class AppUpdatePerson {

    messError = 'error message !!!!';

    messConfirmation = '';

    model = new Person(null, null, null, null);

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

    onSubmit(f: NgForm) {

        this.myService.updatePerson(f.value);

        console.log(f.value);  // { first: '', last: '' }
        console.log(f.valid);  // false

        this.messConfirmation = f.value.name + ' is updated successfully';

        this.model = new Person(null, null, null, null);

    }

}
