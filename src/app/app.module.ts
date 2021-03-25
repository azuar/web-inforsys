import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesign } from './material-desain/material';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CovidComponent } from './covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
