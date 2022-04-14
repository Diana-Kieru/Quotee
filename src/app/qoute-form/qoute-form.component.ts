import { Quote } from '../quote';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css'],
})
export class QouteFormComponent implements OnInit {
  newQuote = new Quote(0, '', '', 0, 0, '', new Date());

  submitQuote(quote: NgForm) {
    this.newQuote.id += 1;
    this.newQuote.quote = quote.value.quote;
    this.newQuote.name = quote.value.name;
    this.newQuote.description = quote.value.description;
    this.quotes.push(quote.form.value);
    console.log(this.quotes);
    quote.form.reset();
  }
  quotes: Quote[] = [
    new Quote(
      1,
      'Nelson Mandela',
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      0,
      0,
      '',
      new Date(2010, 4, 20)
    ),
    new Quote(
      2,
      'walt disney',
      'The way to get started is to quit talking and begin doing.',
      0,
      0,
      '',
      new Date(2020, 9, 10)
    ),
    new Quote(
      3,
      'Steve Jobs',
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      0,
      0,
      '',
      new Date(2021, 2, 1)
    ),
  ];
  constructor() {}
  completequote(ifSure: any, index: number) {
    if (ifSure) {
      this.quotes.splice(index, 1);
    }
  }
  ngOnInit(): void {}
  toggleDetails(index: any) {
    this.quotes[index].showdetails = !this.quotes[index].showdetails;
  }
  deleteTheQuote(ifSure: any, index: number) {
    if (ifSure) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].description}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
    // this.bigger();
  }
  rra:number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.rra)
  
  }

