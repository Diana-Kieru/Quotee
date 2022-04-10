import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeroComponent } from './hero/hero.component';
import { ItemComponent } from './item/item.component';
import { LogoComponent } from './logo/logo.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
// import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeroComponent,
    ItemComponent,
    LogoComponent,
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
