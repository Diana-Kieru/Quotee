import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
// import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,   
    QuoteDetailComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
