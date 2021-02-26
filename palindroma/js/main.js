var sentinella = true;

while(sentinella) {
    var parola = prompt("inserisci una parola e ti dirò se è palindroma");
    if (parola != "") {
        sentinella = false;
    } else {
        alert("Devi inserire una parola");
    }
}

var parolina = parola.toLowerCase();



function isPalindrome(word) {
    for (var i=0; i<word.length; i++) {
        if(word.charAt(i) != word.charAt(word.length -i -1)) {
            return false;
        }
    }

    return true;
}

var risultato = isPalindrome(parolina);

if (risultato) {
    console.log(parola + " è palindroma")
} else {
    console.log(parola + " non è palindroma")
}