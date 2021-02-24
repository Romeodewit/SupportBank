export default class Account extends transactions {
  constructor(name, balance){
    super(date, from, to, narrative, amount)
    this.transactions = [];
    this.name = name;
    this.balance = balance;
  }

  getTransactions() {
    if(this.from === this.name) {
      this.transactions.push({ date: this.date, to: this.to, narrative: this.narrative, amount: this.amount})
    }
  }
}