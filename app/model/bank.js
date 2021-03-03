const Transaction = require('./transaction');
const fs = require('fs');
const Account = require('./account');

class Bank {
  constructor(){
    this.accounts = [];
    this.transactions = [];
    this.loadTransactions();
    this.loadAccounts('from');
  }

  loadTransactions() {
    JSON.parse(fs.readFileSync("transactions.json")).forEach((transaction) =>
      this.transactions.push(
        new Transaction(
          transaction.Date,
          transaction.From,
          transaction.To,
          transaction.Narrative,
          transaction.Amount
        )
      )
    )
  }

  async loadAccounts(property) {
    await this.loadTransactions();
    const array = this.transactions.reduce((accumulator, object) => {
      const key = object[property];
      
      if (!accumulator[key]) {
        new Account(accumulator[key])
      }
      
    }, {})
    this.accounts.push(array);
  }
}

const bank = new Bank;

console.log(bank.accounts)



