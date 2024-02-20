
// inizializzo l'oggetto Date al momento attuale
const now = new Date();

// leggo l'anno
console.log(now.getFullYear());
console.log(now.getMinutes());
console.log(now.getHours());
console.log(now.getDate());

// timestamp = numero di millisecondi a partire da 1/1/1970
console.log(now.getTime());
// il numero del mese è restituito su base 0 quindi gennaio = 0 e dicembre = 11
console.log(now.getMonth());

let giorno = now.getDate();
let mese = now.getMonth() + 1;
const anno = now.getFullYear();

if(giorno < 10){
  giorno = '0' + giorno;
}

if(mese < 10){
  mese = '0' + mese;
}

let ora = now.getHours();
let minuti = now.getMinutes();
let secondi = now.getSeconds();

const minutiMancanti =  60 - minuti;

if(ora < 10) ora = '0' + ora;
if(minuti < 10) minuti = '0' + minuti;
if(secondi < 10) secondi = '0' + secondi;


const data = `${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}` ;

document.getElementById('output').innerHTML = data;
document.getElementById('m-mancanti').innerHTML += minutiMancanti;