import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { AppListPersons } from './listPersons.component';
import { AppAddPerson } from './addPerson.component';
import { AppShowPerson } from './showPerson.component';
import { AppUpdatePerson } from './updatePerson.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
    { path: 'ListPersons', component: AppListPersons },
    { path: 'AddPerson', component: AppAddPerson },
    { path: 'ShowPerson/:personId', component: AppShowPerson },
   { path: 'UpdatePerson/:personId', component: AppUpdatePerson }
];

@NgModule({
    imports: [BrowserModule, HttpModule,
        RouterModule.forRoot(appRoutes
            //, { enableTracing: true } // <-- debugging purposes only)
        )
        , FormsModule],
    declarations: [AppComponent, AppListPersons, AppAddPerson, AppShowPerson, AppUpdatePerson],
    bootstrap: [AppComponent]
})

export class AppModule {



}

