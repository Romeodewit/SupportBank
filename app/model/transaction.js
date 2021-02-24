const fs = require("fs");

class Transaction {
  constructor(date, from, to, narrative, amount) {
    this.date = date;
    this.from = from;
    this.to = to;
    this.narrative = narrative;
    this.amount = amount;
  }
}
const allTransactions = [];

const parsedTransactions = JSON.parse(fs.readFileSync("transactions.json"));
parsedTransactions.forEach((transaction) =>
  allTransactions.push(
    new Transaction(
      transaction.Date,
      transaction.From,
      transaction.To,
      transaction.Narrative,
      transaction.Amount
    )
  )
);

console.log(allTransactions);
