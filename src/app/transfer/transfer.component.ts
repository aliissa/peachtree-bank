import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.interface';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }

  trans: Transaction = {
    amount: 5,
    categoryCode: '#ffffff',
    merchant: 'The Tea Lounge',
    merchantLogo: '',
    transactionDate: 1476933842000,
    transactionType: 'Online Transfer'
  };

  ngOnInit() {
  }

  addTransaction(): void {
    this.transactionService.addTransaction(this.trans);
  }

}
