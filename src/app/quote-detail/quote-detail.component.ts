import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output()
  ifSure = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit(): void {}
  DeleteQuote(complete: boolean) {
    this.ifSure.emit(complete);
  }
}
