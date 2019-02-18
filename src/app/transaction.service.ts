import { Injectable } from '@angular/core';

import { APIResponse, Transaction } from './transaction.interface'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private transactionsURL = './assets/transactions.json';  // path to the json file
  transactions: Transaction[];

  constructor(private http: HttpClient) { }

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<APIResponse>(this.transactionsURL)
      .pipe(
        tap((response: APIResponse) => this.transactions = response.data),
        map((response: APIResponse) => this.transactions),
        catchError(this.handleError('getTransactions', []))
      );
  }

  public searchTransactions(keyword: string): Transaction[] {
    return this.transactions.filter((el) => {
      return el.merchant.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
  }

  public addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
