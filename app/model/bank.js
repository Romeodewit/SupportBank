const Transaction = require("./transaction");
const fs = require("fs");
const Account = require("./account");

class Bank {
  constructor() {
    this.accounts = [];
    this.transactions = [];
    this.loadAccounts();
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
    );
  }

  loadAccounts() {
    this.loadTransactions();
    this.transactions.forEach((transaction) => {
      if (!this.accounts.some(account => account["name"] === transaction["from"]) && !this.accounts.some(account => account["name"] === transaction["to"])) 
      {
        this.accounts.push(new Account(transaction["from"], this.transactions))
        this.accounts.push(new Account(transaction["to"], this.transactions)) 
      } 
      else if (!this.accounts.some(account => account["name"] === transaction["from"])) 
      {
        this.accounts.push(new Account(transaction["from"], this.transactions))
      } 
      else if (!this.accounts.some(account => account["name"] === transaction["to"])) 
      {
        this.accounts.push(new Account(transaction["to"], this.transactions)) 
      }
    });
  }
}

const bank = new Bank();
module.exports = bank;
