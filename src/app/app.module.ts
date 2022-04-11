import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { VotesComponent } from './votes/votes.component';
// import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
       
    QuoteDetailComponent,
            QouteFormComponent,
            VotesComponent,
   
  
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
