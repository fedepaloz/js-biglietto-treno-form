//recupero gli elementi del form che ho scritto in html
const ticketSection = document.getElementById("ticket-form");
const nameInput = document.getElementById("name");
const distanceInput = document.getElementById("distance");
const ageInput = document.getElementById("age");
const buttonBuy = document.getElementById("buy");
const buttonCancel = document.getElementById("cancel");

//recupero gli elementi del ticket che andro a stampare

const ticketStamp = document.getElementById("ticket-stamp");
const passengerName = document.getElementById("passenger-name");
const discount = document.getElementById("discount");
const car = document.getElementById("car");
const cpCode = document.getElementById("cp-code");
const ticketPrice = document.getElementById("ticket-price");



buttonBuy.addEventListener("click", function () {
    const nameValue = nameInput.value;
    const distanceValue = distanceInput.value;
    const ageValue = ageInput.value;



    console.log(nameValue, distanceValue, ageValue)

    //calcolo del prezzo del biglietto


    //questa variabile calcola il prezzo del biglietto normale senza sconti
    const ticketPriceNormal = distanceValue * 0.21

    //queste due variabili calcolano il prezzo scontato sottraendo prima il 20% poi il 40% dal prezzo normale. 
    const underAgeDiscount = ticketPriceNormal - (ticketPriceNormal * 0.20)

    const overAgeDiscount = ticketPriceNormal - (ticketPriceNormal * 0.40)


    //vairabile del prezzo finale in base alla fascia di età selezionata
    
    let finalPrice
    let discountLabel = "tariffa normale"

    if (ageValue === "underAge") {
        finalPrice = underAgeDiscount;
        discountLabel = "tariffa minori"
       
    }
    else if (ageValue === "overAge") {
        finalPrice = overAgeDiscount;
        discountLabel = "tariffa anziani"
    }

    else { finalPrice = ticketPriceNormal;
    discountLabel}

    console.log(finalPrice, discountLabel)



});




















