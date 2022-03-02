import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {CodeComponent} from "./code/code.component";

const routes: Routes = [
  { path: 'Welcome', component: FormComponent },
  { path: 'QR/:adults/:students/:children', component: CodeComponent },
  { path: '', redirectTo: '/Welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
