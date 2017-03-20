import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TypeaheadModule, DatepickerModule  } from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab4Component } from './tab4/tab4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
