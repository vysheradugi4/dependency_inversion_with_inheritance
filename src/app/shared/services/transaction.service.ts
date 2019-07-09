import { Transaction } from 'src/app/shared/models/transaction.model';
import { Service } from 'src/app/shared/services/service';


export class TransactionService extends Service<Transaction> {
  public delete(transaction: Transaction) {
    console.log('Deleted from Transaction service!', transaction);
  }
}