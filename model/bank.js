const Papa = require("papaparse");

// export default class Bank {
//   constructor(){
//   }
// }
const url = "https://raw.githubusercontent.com/CorndelWithSoftwire/supportbank-js/master/resources/Transactions2014.csv"

Papa.parse(url, {
  download: false,
  header: true,
  delimiter: ",",
	complete: function(results) {
		console.log(results);
	}
});