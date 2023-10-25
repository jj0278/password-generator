const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passElOne = document.getElementById("pw1-el")
let passElTwo = document.getElementById("pw2-el")
//console.log(passElOne)
//console.log(passElTwo)

function rando(){
    return Math.floor(Math.random()*(characters.length))
}
//console.log(rando())
function gen(){
    let passwordgen = ""
    for (let i = 0; i < 15; i++)
    passwordgen += characters[rando()]
    return passwordgen
    //console.log(passwordgen)
}
//console.log(gen())
function btnclick(){
    let passwordOne = gen()
    let passwordTwo = gen()
    passElOne.textContent = passwordOne
    passElTwo.textContent = passwordTwo
    console.log(passwordOne)
    console.log(passwordTwo)
}
//btnclick()