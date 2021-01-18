import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ReactiveDrivenComponent } from './reactive-driven/reactive-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    ReactiveDrivenComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
