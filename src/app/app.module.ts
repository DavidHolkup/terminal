import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { CodeComponent } from './code/code.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { SelectorComponent } from './form/selector/selector.component';
import {MatButtonModule} from "@angular/material/button";
import {QrCodeModule} from "ng-qrcode";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CodeComponent,
    SelectorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        QrCodeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
