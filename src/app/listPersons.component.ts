import { Component } from '@angular/core';

import { IPerson } from './ipersons';
import { PersonService } from './persons.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'my-app-list',
  //template: 'ListPersons'
  templateUrl: './html/list.html',
  styleUrls: ['./css/style.css'],
  providers: [PersonService]

})

/**
 * A class to call a service to get a persons list
 */
export class AppListPersons {

  constructor(private router: Router, private myService: PersonService) { }

  appTitle: string = 'Welcome';

  ipersons: IPerson[];

  ngOnInit(): void {

    this.myService.getpersons()
      .subscribe(ipersons => this.ipersons = ipersons);

  }

  deletePerson(personId: number) {

    this.myService.deletePerson(personId);

    console.log("deleted : " + personId);


    //this.router.navigate(['/ListPersons']);


    //!!!! ca marche, c'est pas bien fait : erreur XML console navigateur
    let index = this.ipersons.findIndex(d => d.personId === personId); //find index in your array
    this.ipersons.splice(index, 1);//remove element from array

    //event.stopPropagation();


  }



  appList: any[] = [{
    "ID": "1",
    "Name": "One",
    "Age": "30",
    "Job": "Gazzar"
  },

  {
    "ID": "2",
    "Name": "Two",
    "Age": "40",
    "Job": "Sabbagh"
  }];



}


