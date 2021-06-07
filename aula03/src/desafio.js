// 15/05/2020 15/05/2021

function print(a){
    console.log(a);
}


var moment = require("moment")

var dataInicial = moment("05/15/2020", "MM/DD/YYYY")
var dataFinal = moment("05/15/2021", "MM/DD/YYYY")

console.log(dataInicial)
console.log(dataFinal)

var results2 = dataFinal.diff(dataInicial)

print(results2 + "asdasd")

