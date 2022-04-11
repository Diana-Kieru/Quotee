import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QouteFormComponent } from './qoute-form/qoute-form.component';
import { VotesComponent } from './votes/votes.component';
import { TimePipe } from './time.pipe';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';

@NgModule({
  declarations: [AppComponent, QouteFormComponent, VotesComponent, TimePipe, QuotesDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
