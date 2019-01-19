import { Quote } from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((favQuote: Quote) => {
      return favQuote.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoritesQuotes() {
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote: Quote){
    return this.favoriteQuotes.find((q: Quote) => {
      return q.id == quote.id;
    })
  }
}