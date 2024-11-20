import { characters_dark, characters_light, showCharacters, chooseCharacter } from "./modules/character.js"

const cardsDarks = characters_dark
const cardsLigth = characters_light

const cardOne = await chooseCharacter(cardsDarks)




async function showChosenCharacter(character) {

    if(character.type === 'dark')
        console.log(` ----card🧙----  \n- Name: ${character.name} - \n- HP: ${character.hp}     -\n- Power: ${character.power}   -\n- Type: ${character.type}  -    \n---------------`)

}



await showChosenCharacter(cardOne)






async function battle(card1, card2) {

    
}



(async function main() {
    console.log('-------- POWER WAR --------')

    console.log(cardOne)

    
    


})()

