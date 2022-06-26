//recupero gli elementi del form che ho scritto in html
const ticketSection = document.getElementById("ticket-form")
const nameInput = document.getElementById("name")
const distanceInput =  document.getElementById("distance")
const ageInput =  document.getElementById("age")
const buttonBuy =  document.getElementById("buy")
const buttonCancel = document.getElementById("cancel")

//recupero gli elementi del ticket che andro a stampare

const ticketStamp = document.getElementById("ticket-stamp")
const passengerName = document.getElementById("passenger-name")
const discount = document.getElementById("discount")
const car = document.getElementById("car")
const cpCode = document. getElementById("cp-code")
const ticketPrice = document.getElementById("ticket-price")



buttonBuy.addEventListener("click", function () {
    const nameValue = nameInput.value;
    const distanceValue = distanceInput.value

    
    
} );






/* const ticketPrice = distance * 0.21

const underAge = ticketPrice * 0.20

const overAge = ticketPrice * 0.40

let finalPrice

if (age < 18) {
    finalPrice = ticketPrice - underAge
}
else if (age > 65) {
    finalPrice = ticketPrice - overAge
}
else { finalPrice = ticketPrice }


document.getElementById("buy").innerText = "il prezzo del tuo biglietto è " + finalPrice
 */










