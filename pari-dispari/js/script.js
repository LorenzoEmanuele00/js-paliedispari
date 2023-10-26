// ***** FUNCTIONS *****
function rng (max, min) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function verifyPD (num) {

    let verPD = "dispari";
    
    if (num % 2 === 0) {  
        verPD = "pari";
    }
    
    return verPD;
}


// ***** MAIN CODE ***** 
document.getElementById("play").addEventListener("click", function() {

    let userNumber;
    let userPD = "";
    
    do {
        userPD = prompt("pari o dispari ?");
    } while (userPD != "pari" && userPD != "dispari");

    do {
        userNumber = parseInt(prompt("Dammi un numero"));
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

    console.log (userNumber, userPD);

    const compNumber = rng (5, 1)
    console.log (compNumber);

    let somma = userNumber + compNumber;

    const verPD = verifyPD(somma);
    console.log(verPD);

    let result = false;
    if (verPD === userPD) {
        result = true;
    }

    if (result) {
        message = `HAI VINTO<br>il tuo numero è: ${userNumber} e hai scelto ${userPD}, invece il numero del pc è: ${compNumber}`
    } else {
        message = `HAI PERSO<br>il tuo numero è: ${userNumber} e hai scelto ${userPD}, invece il numero del pc è: ${compNumber}`
    }
    document.querySelector("h2").innerHTML = message;
});

