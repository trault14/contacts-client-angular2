/**
 * Created by timrault on 2016-12-16.
 */

import {Http} from '@angular/http';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactService {
  private contacts = new Observable<Contact[]>();

  constructor(private http: Http) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get('http://localhost:8080/contacts').map(res=>res.json());
  }

  deleteContact(contact: Contact) {
    this.http.delete('http://localhost:8080/contact/' + contact.id);
  }

  /*addContact(contact: Contact, http: Http) {
    http.post('http://localhost:4200/contact/' + contact.username + '/' + contact.password);
  }*/
}

export class Contact {
  public username: string;
  public password: string;
  public id: string;

  constructor(username: string, password: string, id: string) {
    this.username = username;
    this.password = password;
    this.id = id;
  }

}
