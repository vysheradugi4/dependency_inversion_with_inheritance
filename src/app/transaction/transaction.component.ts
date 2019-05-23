import { OnInit, Component } from '@angular/core';

import { Service } from 'src/app/shared/services/service';
import { Entity } from 'src/app/entity/entity';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { Transaction } from 'src/app/shared/models/transaction.model';


@Component({
  selector: 'transaction',
  template: 'Transaction Component <button (click)="delete(transaction)">Delete</button>',
  providers: [
    { provide: Service, useClass: TransactionService }
  ]
})
export class TransactionComponent extends Entity<Transaction> implements OnInit {

  public transaction: Transaction;

  constructor(public service: Service<Transaction>) {
    super(service);
  }

  ngOnInit(): void {
    this.transaction = new Transaction();
    this.transaction.id = 777;
  }
}