import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../model/model.contact";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  private url = "http://localhost:8080/contacts";

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get(this.url);
  }

  findContacts(filter: string, page: number, size: number) {
    return this.http.get(
      this.url +
        "/findContacts?mc=" +
        filter +
        "&page=" +
        page +
        "&size=" +
        size
    );
  }

  saveContact(contact: Contact) {
    return this.http.post(this.url, contact);
  }
}
