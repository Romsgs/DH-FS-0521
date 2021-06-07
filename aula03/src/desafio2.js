const { differenceInDays, differenceInMinutes  } = require('date-fns')
var test = new Date().toDateString();
var dataInicial = new Date(2020, 05, 15)
var dataFinal = new Date(2021, 05, 15)

var diferenca = differenceInMinutes(dataInicial, dataFinal)

console.log(diferenca)