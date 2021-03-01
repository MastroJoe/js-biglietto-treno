// INPUT
// età
var eta = prompt("Inserisci la tua età:");
// chilometri
var chilometri = prompt("Inserisci quanti chilometri vuoi percorrere:");

console.log(parseInt(eta));
console.log(parseFloat(chilometri));

// OUTPUT

// prezzo del biglietto
var biglietto = chilometri * 0.21;
// prezzo biglietto con sconto minorenni
var minorenni = biglietto - (biglietto * 20 / 100);
// prezzo biglietto con sconto over 65
var over65 = biglietto - (biglietto * 40 / 100);

//calcolo del prezzo del viaggio
if (eta < 18) {
  viaggio = (chilometri * 0.21) - (chilometri * 0.21) * 0.2;
} else if (eta > 65) {
  viaggio = (chilometri * 0.21) - (chilometri * 0.21) * 0.4;
} else {
  viaggio = (chilometri * 0.21);
}

console.log(biglietto);
console.log(minorenni);
console.log(over65);
console.log("Il prezzo del viaggio: " + viaggio + "€");
