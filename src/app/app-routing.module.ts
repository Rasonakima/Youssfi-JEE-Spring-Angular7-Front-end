import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { NewContactComponent } from "./new-contact/new-contact.component";

const routes: Routes = [
  { path: "contacts", component: ContactsComponent },
  { path: "new-contact", component: NewContactComponent },
  { path: "", redirectTo: "/contacts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
