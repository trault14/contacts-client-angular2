/**
 * Created by timrault on 2016-12-17.
 */

import {Component} from "@angular/core";
import {Contact} from "./contact.service";

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.html'
})
export class ContactDetailComponent {
  public selectedContact: Contact;

}
