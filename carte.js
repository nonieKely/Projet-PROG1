const prompt = require ("prompt-sync")();
const user = prompt("créez un pseudo : ");
let score1 = 0
let score2 = 0

/**
 * @function countScore
 * @param {string} result 
 * @returns number
 */
function countScore(result){
if(result == "win"){
console.log( user + " a gagné cette manche!")
score1++
}else if(result == "lose"){
console.log(" Le bot a gagné cette manche!")
score2++
}else{
console.log("Vous remportez tous les deux cette manche!")
score2 += 1
score1 += 1}
return (score1 + " et " + score2);
}



/**
 * @function IApick
 * @returns string
 */
function IApick (){
const randomChoice = ["feu", "eau", "plante"]
const BotCard = Math.floor(Math.random()*3)
return randomChoice[BotCard]
}


//consiste à afficher les resultats pour chaque manche.
function result(){
var card = play();
var botCard = IApick();
console.log("le bot a choisi la carte " + botCard );
if(card == "feu" && botCard == "eau"){
let result = "lose"
console.log(countScore(result));
}else if( card == "feu" && botCard == "plante"){
let result = "win"
console.log(countScore(result));
}else if( card == "eau" && botCard == "feu"){
let result = "win"
console.log(countScore(result));
}else if( card == "eau" && botCard == "plante"){
let result = "lose"
console.log(countScore(result));
}else if( card == "plante" && botCard == "feu"){
let result = "lose"
console.log(countScore(result));
}else if( card == "plante" && botCard == "eau"){
let result = "win"
console.log(countScore(result));
}else if(card == botCard){
let result = "equal"
console.log(countScore(result));
}}


/**
 * Cette fonction va afficher le résultat final
 * @function finalScore
 * @param {number} score1 
 * @param {number} score2 
 */
function finalScore(score1, score2){
if(score1 > score2 ){
console.log( "\n " + user + " a gagné la partie! \n ")
}else if( score1 < score2){
console.log("\n Quel dommage! Le bot a gagné la partie! \n ")
}else if( score1 == score2){
console.log("Vous êtes à égalité!")
let choice = prompt("voulez-vous retenter votre chance pour battre le bot? (o/n) : ")
if(choice == "o"){
result();
}
else if(choice == "n"){
console.log("D'accord , merci d'avoir joué! ");
return;
}}
}

//Cette fonction va en quelque sorte lancer le jeu
function play(){
console.log("Vous disposez de 3 cartes pour cette manche: \n Eau      Feu     Plante")
let choice = prompt("choisissez une carte => ");
return choice;
}
for( let i = 1; i <= 3 ; i++){
result()}

finalScore(score1,score2)