const CSVToJSON = require('csvtojson');

// export default class Bank {
//   constructor(){
//   }
// }

let array = [];

const csvFiles = ["D:\\Code\\training\\Corndell\\day2\\SupportBank\\csv\\transactions.csv"];

async function readCsv(filepath) {
  const parsedFile = await CSVToJSON().fromFile(filepath)
    .then(parsedCsv => {
      parsedCsv.forEach(value => array.push(value))
    }).catch(err => {
      console.log(err);
    });
  return parsedFile;
}

const transactions = Promise.resolve(readCsv(csvFiles[0]))

transactions.then(() => {
  console.log(array.length)
});
// transactions(csvFiles[0]);