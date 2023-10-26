// ***** FUNCTION *****
function findPalindromo(string) {
    
    let c = string.length - 1;
    let letterCounter = 0;
    let result = false;

    for (let i = 0; i < string.length ; i++) {
        if (string[i] === string[c]) {
            letterCounter++;
        }
        c--;
    }

    if (letterCounter === string.length) {
        result = true;
    }
    return result;
}

// ***** MAIN CODE *****

const userString = prompt("Dammi una parola")
const h2 = document.querySelector("h2")
const result = findPalindromo(userString);

if (result) {
    h2.innerHTML = `La parola ${userString} è palindroma`;
    h2.classList.remove("red-c")
    h2.classList.add("green-c")
} else {
    h2.innerHTML = `La parola ${userString} non è palindroma`;
    h2.classList.remove("green-c")
    h2.classList.add("red-c")
}
