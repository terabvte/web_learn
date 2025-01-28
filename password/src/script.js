const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let fieldOne = document.getElementById("field-1")
let fieldTwo = document.getElementById("field-2")

function generatePassword1() {
    let password1 = ""
    for (let i = 0; i < 15; i++) {
        password1 = password1.concat(characters[Math.floor(Math.random()*characters.length)])
    }
    // console.log(password)
    // console.log(characters[Math.floor(Math.random()*characters.length)])

    fieldOne.textContent = password1
}

function generatePassword2() {
    let password2 = ""
    for (let i = 0; i < 15; i++) {
        password2 = password2.concat(characters[Math.floor(Math.random()*characters.length)])
    }
    fieldTwo.textContent = password2
}
