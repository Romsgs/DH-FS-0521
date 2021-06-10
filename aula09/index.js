const express = require("express");

const app = express();


// Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
// e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
// que foi informado e exibir uma mensagem de cumprimento "Olá, nome".

// Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
// e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
// deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
// o resultado.

app.get("/cumprimentar/:nome", (req, res)=>{
    
    const nome = req.params.nome
    res.send(`ola ${nome}`)
})
app.get("/calcular/:n1/:n2", (req, res)=>{
    
    const numero1 = parseInt(req.params.n1)
    const numero2 = parseInt(req.params.n2)    
    
        res.send(`a soma é ${numero1 + numero2} `)    

})

app.get("/calcular/:n1", (req, res)=>{
    
    const numero1 = parseInt(req.params.n1)
    
    
        res.send(`o numero é ${numero1} `)    

})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
    
    
})