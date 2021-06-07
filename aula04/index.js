let nome = "Romulo"
let idade = 32
let eMaiorDeIdade = true

let objeto = {
    nome:"Romulo",
    idade:32,
    eMaiorDeIdade:true
}

let animais = ["cão", 'raposa', 'coyote', 'lobo']

let numero1 = 10;
let numero2 = 5;

console.log('a soma entre 5 e 10 -> ' + (numero1 + numero2))
console.log('a subtracao entre 10 e 5 -> ' + (numero1 - numero2))
console.log('a multiplicacao entre 10 e 5 -> ' + (numero1 * numero2))
console.log('a divisao entre 10 e 5 -> ' + (numero1 / numero2))

if(numero1 > numero2){
    console.log(`o ${numero1} e maior que ${numero2}`)
} else {console.log(`O ${numero2} e maior que ${numero1}`)}