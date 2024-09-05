// transfer Service
import { accounts, transactions, findAccount } from './database.js';
import { Transaction } from './models.js';

export const transferService = (sourceAccNum, desAccNum, amount) => {
  if (amount <= 0) {
    throw new Error('Amount must be greater than zero.');
  }

  const sourceAccount = findAccount(sourceAccNum);
  const desAccount = findAccount(desAccNum);

  if (!sourceAccount || !desAccount) {
    throw new Error('Account not found.');
  }

  if (sourceAccount.balance < amount) {
    throw new Error('Insufficient balance in the source account.');
  }

  // perform the transfer
  sourceAccount.balance -= amount;
  desAccount.balance += amount;

  // log the transaction
  const transaction = new Transaction(sourceAccNum, desAccNum, amount);
  transactions.push(transaction);
 
  // to check the tables are updated or not.
  console.log(transactions);
  console.log(accounts);

  return transactions;
};
