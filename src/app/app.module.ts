import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
// import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
       
    QuoteDetailComponent,
   
  
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
