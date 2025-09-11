/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

//String
const myName = "Mia";
console.log(myName);

//Number
let age = 26;
console.log(age);

//Boolean
const hasBrownHair = true;
console.log(hasBrownHair);

//Array
let wishList = ["money", "clothes", "computer", "new bed"];
console.log(wishList);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

//plusser sammen gamle poeng og nye poeng for å få score
let points = 2;
let newPoints = 6;
let myScore = points + newPoints;
console.log(`You have ${myScore} points`);

// plusser sammen count og 2
let count = 5;
count += 2;
console.log(count);

let count2 = 5;
//plusser 1 på count2
count2++;
console.log(count2);

let count3 = 4;
//trekker 1 fra count3
count3--;
console.log(count3);

let count4 = 8;
//trekker fra 4 fra count4
count4 -= 4;
console.log(count4);

//trekker fra minuspoeng fra gammel score for å få ny score
let oldScore = 15;
let minusPoints = 3;
let newScore = oldScore - minusPoints;
console.log(newScore);

// gjør det samme men enklere
let score = 15;
score -= minusPoints;
console.log(score);

//deler pizzastykker på antall folk for å få antall stykker per pers
let pizzaSlices = 8;
let people = 2;
let slicesEach = pizzaSlices / people;
console.log(`You get ${slicesEach} slices each`);

// ganger sammen tall
const num1 = 5;
const num2 = 9;

sum = num1 * num2;
console.log(sum);
/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "Mia";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her
if (userName && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log("welcome!");
} else {
  console.log("error");
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

// Skriv koden for oppgave 5 her
const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);
