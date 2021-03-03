const bank = require('./bank');
class Account {
  constructor(name, transactions) {
    this.name = name;
    this.balance = 0;
    this.loadBalance(transactions);
  }

  loadBalance(transactions) {
    transactions.forEach(transaction => {
      if (transaction["to"] === this.name) {
        this.balance += transaction["amount"];
      } else if (transaction["from"] === this.name) {
        this.balance -= transaction["amount"];
      }
    })
    this.balance = this.balance.toFixed(2);
  }
}

module.exports = Account;
