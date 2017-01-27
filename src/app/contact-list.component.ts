/**
 * Created by timrault on 2016-12-16.
 */

import {Component} from "@angular/core";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {ContactService, Contact} from "./contact.service";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.html',
})
export class ContactListComponent {
  private contacts: Observable<Contact[]>;
  private selectedContact: Contact;

  constructor(private service: ContactService) {
    this.contacts = service.getContacts();
   }

   selectContact(contact: Contact) {
    this.selectedContact = contact;
   }
}
