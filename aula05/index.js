let pets = [
    {
        nome: "feijoada",
        nomeDono: 'Romulo',
        idade: 4,
        tipo: 'cachorro',
        raca: 'Labrahound',
        peso: 15,
        genero: 'femea',
        cor: 'preto-chocolate',
        vacinado: true
    },
    {
        nome: "felina",
        nomeDono: 'Romulo',
        idade: 14,
        tipo: 'cachorro',
        raca: 'maltes',
        peso: 5,
        genero: 'femea',
        cor: 'branco',
        vacinado: true
    },
    {
        nome: "Artemisia",
        nomeDono: 'Agni',
        idade: 10,
        tipo: 'gato',
        raca: 'vira-lata',
        peso: 3,
        genero: 'femea',
        cor: 'malhado',
        vacinado: true
    },
    {
        nome: "ginko",
        nomeDono: 'Agni',
        idade: 7,
        tipo: 'gato',
        raca: 'vira-lata',
        peso: 3,
        genero: 'macho',
        cor: 'preto',
        vacinado: true
    }
]

console.log('lista de pets antiga: ')

let listarPets= () =>{
    console.log('esta seria a lista de pets cadastrados: ')
    pets.forEach(element => {
        console.log(element.nome)
    });
}


listarPets()


let petNovo = {
    nome: "simba",
    nomeDono: 'mufasa',
    idade: 30,
    tipo: 'leao',
    raca: 'rei',
    peso: 100,
    genero: 'macho',
    cor: 'amarelo',
    vacinado: true
}

let validaPropriedades = (obj) => {
    return (obj.nome &&
    obj.nomeDono &&
    obj.idade &&
    obj.tipo &&
    obj.raca &&
    obj.peso &&
    obj.genero &&
    obj.cor &&
    obj.vacinado)    
}

const validaObjeto = (obj) => {
    if (typeof(obj) == 'object'){
        console.log('validando objeto ')
        return validaPropriedades(obj)
    } else {console.log('objeto seria invalido')}
}


let cadastrarPet = (arrayPets, novo) => {
    console.log('cadastrando novo pet')
        if(validaObjeto(novo)){
            console.log("adcionando novo pet para a lsita 'pet'")
            arrayPets.push(novo)
        } else {console.log('objeto cadastra invalido')}
     
}

cadastrarPet(pets, petNovo)

listarPets()





// let validaDados = (obj) =>{
//     obj.nome ? "nome OK " : ('falta nome')
//     obj.nomeDono ? "nomeDono OK " : ('falta o nome do dono')
//     obj.idade ? "idade OK " : ('falta idade')
//     obj.tipo ? "tipo OK " : ('falta tipo')
//     obj.raca ? "raca OK " : ('falta raca')
//     obj.peso ? "peso OK " : ('falta peso')
//     obj.genero ? "genero OK " : ('falta genero')
//     obj.cor ? "cor OK " : ('falta cor')
//     obj.vacinado ? "vacinado OK " : ('falta vacinado')
// }

// let validaDados2 = (obj) =>{
//     if (Object.keys(obj).length == Object.keys(pets[0]).length){
//         console.log('tudo certo')
//     } else { console.log('faltam coisas')}
// }


