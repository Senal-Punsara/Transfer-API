export class Account {
    constructor(accNumber, balance) {
      this.accNumber = accNumber;
      this.balance = balance;
    }
  }
  
  export class Transaction {
    constructor(sourceAccNum, desAccNum, amount) {
      this.sourceAccNum = sourceAccNum;
      this.desAccNum = desAccNum;
      this.amount = amount;
      this.date = new Date();
    }
  }
  