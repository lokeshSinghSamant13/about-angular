import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FillDataComponent } from './fill-data/fill-data.component';
import { FirstFormComponent } from './forms/first-form/first-form.component';
import { SecondFormComponent } from './forms/second-form/second-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FillDataComponent,
    FirstFormComponent,
    SecondFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
