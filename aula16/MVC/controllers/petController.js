const { json } = require('express');
const pets = require('../database/pets.json')

const petController = {
    index: (req, res) =>{
        res.send(pets.pets)
    },
    show: (req, res) =>{
        
        const idPet = req.params.id;
        for(let pet of pets.pets){
            if(pet.id == idPet){
                res.send(pet)
            } 
        }

    }
}

module.exports = petController;