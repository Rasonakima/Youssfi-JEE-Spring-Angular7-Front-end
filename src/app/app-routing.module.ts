import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { NouveauContactComponent } from "./nouveau-contact/nouveau-contact.component";

const routes: Routes = [
  { path: "contacts", component: ContactsComponent },
  { path: "new-contact", component: NouveauContactComponent },
  { path: "", redirectTo: "/contacts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
