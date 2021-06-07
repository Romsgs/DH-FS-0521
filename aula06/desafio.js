
let pets = [
    {
      nome: 'Yoshi',
      nomeDono: 'Victor',
      idade: 7,
      tipo: 'Cachorro',
      raca: 'Akita Inu',
      peso: 40,
      genero: 'Macho',
      cor: 'ruivo',
      vacinado: true
    },
    {
      nome: 'Pituco',
      nomeDono: 'Victor',
      idade: 2,
      tipo: 'ave',
      raca: 'Calopsita',
      peso: 0.5,
      genero: 'Macho',
      cor: 'cinza',
      vacinado: true
    },
    {
      nome: 'Pitty',
      nomeDono: 'Rose',
      idade: 2,
      tipo: 'ave',
      raca: 'Agapornis',
      peso: 0.5,
      genero: 'Fêmea',
      cor: 'verde',
      vacinado: true
    },
    {
        nome: 'Bixano',
        nomeDono: 'Rose',
        idade: 10,
        tipo: 'Cachorro',
        raca: 'PastorAlemão',
        peso: 0.5,
        genero: 'Fêmea',
        cor: 'Amarelo',
        vacinado: true
      },
  ]
 

//Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" que exiba no terminal o NOME de todos os pets. 
//(utilizar o foreach)
const ListarNomePets = () => {
  console.log('listando nome dos pets')
  pets.forEach(element => {
    console.log(element.nome)
  });
}

ListarNomePets()

//Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no terminal o NOMEDONO de todos os pets.  (Usar for of)

const ListarNomeDonoPets = () => {
  console.log('listando nome dos donos')
  for(let donos of pets){
    console.log(donos.nomeDono)
  }
}
ListarNomeDonoPets()
// Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)
const ListarTipo = () => {
  console.log('listando os tipos')
  return pets.filter(n =>{
    console.log(n.tipo)
  })
}
ListarTipo()
// Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos. O nome da nova propreie e dade deve ser "DataCadastro". (Usar Object Date e MAP)
const DataDeCadastro = () =>{
  console.log('criando a data')
  let dataDeHoje = new Date();
  console.log('criando o map')
  pets.map( n => {
    n.DataCadastro = dataDeHoje
  })
  
}

DataDeCadastro()

//console.log(pets[3].DataCadastro)
// Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá receber como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)
const ListaDadosPet = obj => {
  console.log(`listando os dados do pet ${obj.nome}`)
  let {nome, nomeDono, idade, tipo, raca, peso, genero, cor, vacinado, DataCadastro} = obj;
  console.log(nome, nomeDono, idade, tipo, raca, peso, genero, cor, vacinado, DataCadastro)

  
}
console.log('teste da funcao listaDadosPet com o parametro - pets[0] -')
ListaDadosPet(pets[0])
console.log('>>>>>>>>>fim do teste<<<<<<<<<')
// Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "LitarPets" que irá receber como parâmetro o array de pets e um callback. Essa função deve exibir os dados de todos os pets cadastrados.  (aplicar a função ListaDadosPet utilizada como callback)

const LitarPets = () => {
  pets.forEach(n => {
    ListaDadosPet(n)
  })
}

LitarPets()
