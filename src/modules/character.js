
//Character light
const characters_light = {

    "character1":{
        "name":"Rowser",
        "type":"ligth",
        "hp":100,
        "power":20,
    },

    "character2":{
        "name":"Borw",
        "type":"ligth",
        "hp":120,
        "power":15,
    },

    "character3":{
        "name":"Flows",
        "type":"ligth",
        "hp":90,
        "power":25,
    },

}

//Characters Dark
const characters_dark = {

    "character1":{
        "id":1,
        "name":"Texts",
        "type":"dark",
        "hp":120,
        "power":30,
    },

    "character2":{
        "id":2,
        "name":"Liqk",
        "type":"dark",
        "hp":140,
        "power":25,
    },

    "character3":{
        "id":3,
        "name":"Fraka",
        "type":"dark",
        "hp":110,
        "power":10,
    }

}


//Show Character
async function showCharacters(character) {
    
    for (const key in character) {
        if (Object.prototype.hasOwnProperty.call(character, key)) {
            const element = character[key];

            console.log("\n")

            console.log(` character ${element.id} \n name: ${element.name} \n Hp: ${element.hp} \n power: ${element.power}`) 
        }
    }

}

//exports const and functions
export {
    showCharacters,
    characters_dark,
    characters_light,
}
