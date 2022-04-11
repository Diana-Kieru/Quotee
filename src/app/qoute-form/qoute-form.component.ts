import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {
  newQuote = new Quote(0,"","",0,0,"",new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  constructor() {}
  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  ngOnInit(): void {
  }

}
