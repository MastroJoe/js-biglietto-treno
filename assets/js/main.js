// INPUT
// età
var eta = prompt("Inserisci la tua età:");
// chilometri
var chilometri = prompt("Inserisci i chilometri da percorrere:");

console.log(parseInt(eta));
console.log(parseFloat(chilometri));

// OUTPUT
// prezzo del biglietto
var biglietto = chilometri * 0.21;
// prezzo biglietto con sconto minorenni
var minorenni = biglietto - (biglietto * 20 / 100);
// prezzo biglietto con sconto over 65
var over65 = biglietto - (biglietto * 40 / 100);

console.log(biglietto);
console.log(minorenni);
console.log(over65);
