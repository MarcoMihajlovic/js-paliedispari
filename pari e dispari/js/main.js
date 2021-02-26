var sentinella = true;

while (sentinella) {
    var numUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));

    if (numUtente >= 1 && numUtente <= 5) {
        sentinella = false;
    } else {
        alert("Devi inserire un numero compreso tra 1 e 5");
    }
}

sentinella = true;

while (sentinella) {
    var parolaUtente = prompt("Inserisci se uscirà pari o dispari");
    var parolina = parolaUtente.toLowerCase();

    if (parolina == "pari" || parolina == "dispari") {
        sentinella = false;
    } else {
        alert("Devi inserire pari o dispari");
    }
}

function isCheck(num) {
    return Math.floor(Math.random()*5 +1) + num;
}

var risultato = isCheck(numUtente);
var numCom = risultato - numUtente;

alert("Il computer ha scelto " + numCom);

if (risultato%2 == 0 && parolina == "pari") {
    console.log("Hai vinto perchè " + risultato + " è pari");
} else if (risultato%2 == 1 && parolina == "dispari") {
    console.log("Hai vinto perchè " + risultato + " è dispari");
} else if (risultato%2 == 0 && parolina == "dispari") {
    console.log("Hai perso perchè " + risultato + " non è dispari");
} else if (risultato%2 == 1 && parolina == "pari") {
    console.log("Hai perso perchè " + risultato + " non è pari")
}
