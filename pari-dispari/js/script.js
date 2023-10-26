// ***** FUNCTION *****
function findPalindromo(string) {
    const h2 = document.querySelector("h2")
    let c = string.length - 1;
    let letterCounter = 0;

    for (let i = 0; i < string.length ; i++) {
        if (string[i] === string[c]) {
            letterCounter++;
        }
        c--;
    }

    if (letterCounter === string.length) {
        h2.innerHTML = `La parola ${string} è palindroma`;
        h2.classList.remove("red-c")
        h2.classList.add("green-c")
        
    } else {
        h2.innerHTML = `La parola ${string} non è palindroma`;
        h2.classList.remove("green-c")
        h2.classList.add("red-c")
    }
}

// ***** MAIN CODE *****

const userString = prompt("Dammi una parola")

findPalindromo(userString);
