import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../services/contacts.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  contacts: any[];

  filter: string = "";
  page: number = 0;
  size: number = 5;
  pages: Array<number>;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.doFind();
  }

  doFind() {
    this.contactsService
      .findContacts(this.filter, this.page, this.size)
      .subscribe((response: any) => {
        this.contacts = response.content;
        this.pages = new Array(response.totalPages);
      });
  }

  goto(i: number) {
    this.page = i;
    this.doFind();
  }
}
