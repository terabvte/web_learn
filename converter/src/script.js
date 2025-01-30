/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let buttonEl = document.getElementById("butt")
let inputEl = document.getElementById("input")
let conv1El = document.getElementById("conv1")
let conv2El = document.getElementById("conv2")
let conv3El = document.getElementById("conv3")



buttonEl.addEventListener("click", function () {
    conv1El.innerHTML = `${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${Math.floor((inputEl.value/3.281)*1000) / 1000 } meters`
    conv2El.innerHTML = `${inputEl.value} liters = ${(inputEl.value*0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(3)} liters`
    conv3El.innerHTML = `${inputEl.value} kilos = ${(inputEl.value*2.205).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.205).toFixed(3)} kilos`

})
