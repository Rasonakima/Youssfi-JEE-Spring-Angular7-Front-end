import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsService } from "./services/contacts.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NewContactComponent } from './new-contact/new-contact.component';

@NgModule({
  declarations: [AppComponent, ContactsComponent, NewContactComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
