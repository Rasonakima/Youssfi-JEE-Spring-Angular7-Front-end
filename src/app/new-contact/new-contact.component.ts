import { Component, OnInit } from "@angular/core";
import { Contact } from "../model/model.contact";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "app-new-contact",
  templateUrl: "./new-contact.component.html",
  styleUrls: ["./new-contact.component.css"]
})
export class NewContactComponent implements OnInit {
  contact: Contact = new Contact();

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {}

  saveContact() {
    this.contactsService
      .saveContact(this.contact)
      .subscribe((response: any) => {
        this.contact = response;
      });
  }
}
