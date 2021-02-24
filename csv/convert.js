const CSVToJSON = require('csvtojson');
const fs = require('fs');

CSVToJSON().fromFile("D:\\Code\\training\\Corndell\\day2\\SupportBank\\csv\\transactions.csv")
    .then(parsedCsv => {
      const transactionsData = [];
      parsedCsv.forEach(transaction => transactionsData.push(transaction))
      fs.writeFile('transactions.json', JSON.stringify(transactionsData, null, 4), (err) => {
        if (err) {
            throw err;
        }
        console.log(transactionsData)
        console.log("JSON array is saved.");
    });
})
