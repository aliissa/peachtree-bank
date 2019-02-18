import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.interface';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactions = this.transactionService.transactions;
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }

  search(str: string) {
    this.transactions = this.transactionService.searchTransactions(str);
  }

}
