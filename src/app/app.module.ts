import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // @angular/something = AngularJS library, { NgModule } = export part of the library
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http'; // import is a pure JavaScript thing (called JS module, but different from Angular modules)

import { AppComponent } from './app.component';
import {ContactListComponent} from "./contact-list.component";
import {ContactService} from "./contact.service";
import {ContactDetailComponent} from "./contact-detail.component";

@NgModule({ // Decorators add metadata to JS classes so Angular recognizes them and knows how to use them
  declarations: [ // The view classes that belong to the module
    AppComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [ // Other modules whose exported classes are needed by component templates declared in this module
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent] // Only the root module should set this property, defines the main application view
})
export class AppModule { } // export is a javascript thing, with import in another file
// The root module doesn't export anything because no other module needs to import the root module
