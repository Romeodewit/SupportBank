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

export const transactions = () => {
  const allTransactions = [];
  JSON.parse(fs.readFileSync("transactions.json")).forEach((transaction) =>
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
  return allTransactions;
};
