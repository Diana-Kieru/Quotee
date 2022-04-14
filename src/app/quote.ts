export class Quote {
  showdetails: boolean;
  id: number;
  name: string;
  quote: string;
  upvotes: number;
  downvotes: number;
  description: string;
  today:Date;
  static downvotes: number;
  constructor(
    id: number,
    name: string,
    quote: string,
    upvotes: number,
    downvotes: number,
    description: string,
    today :Date
  ) {
    this.id = id;
    this.name = name;
    this.quote = quote;
    this.description = description;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.showdetails = false;
    this.today = today;
  }
}