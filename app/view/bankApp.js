const readlineSync = require("readline-sync");
const bank = require("../model/bank.js");

console.log("Hi Welcome to the banking app");
console.log("This app allows you to look at other peoples private data.");
console.log("Take a look at the following options:");
console.log("To look at all transactions press 1");
console.log("To look at account bank balances press 2");
const answer = readlineSync.question(
  "To look at someones individual transactions Please press 3:"
);
switch (answer) {
  case "1":
    bank.transactions.forEach((transaction) => {
      console.log(
        `Date: ${transaction["date"]}, From: ${transaction["from"]}, To: ${transaction["to"]}, Amount: +/-${transaction["amount"]}`
      );
    });
    break;
  case "2":
    console.log(bank.accounts);
    break;
  case "3":
    const name = readlineSync.question("Please enter a name:");
    const transactionsArray = [];
    bank.transactions.forEach((transaction) => {
      if (transaction["to"].toUpperCase() === name.toUpperCase()) {
        transactionsArray.push(transaction);
      }
    });
    if (transactionsArray.length !== 0) {
      console.log(transactionsArray);
    } else {
      console.log("Name does not exist");
    }
}
