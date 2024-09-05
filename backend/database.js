import { Account } from './models.js';

// accounts table
export const accounts = [
  new Account('1', 1000),
  new Account('2', 500),
  new Account('3', 500),
];

// transactions table
export const transactions = [];

// query to find an account
export const findAccount = (accNumber) => accounts.find(acc => acc.accNumber === accNumber);
