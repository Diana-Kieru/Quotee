import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { AuthorComponent } from './quote-author/author.component';
import { FormComponent } from './quote-form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    AuthorComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
