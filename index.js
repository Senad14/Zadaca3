

/*Zadatak 1 Parni br 0-10*/

console.log("Ispisi parne brojeve 0-10")
var br = 0
while(br<=10) {
    
if(br%2 == 0){
     console.log(br)
 }
    br++
 }

/*Zadatak 2
Uz pomoć JavaScript-a ispisati sljedeću rečenicu:
Napoleon je rekao: "Svijet pati mnogo. Ne zbog nasilja loših ljudi. Nego zbog šutnje dobrih
ljudi."*/

document.write("Napoleon je rekao: \"Svijet pati mnogo. Ne zbog nasilja loših ljudi. Nego zbog šutnje dobrih ljudi.\"")

/*Zadatak 3
Napraviti JavaScript kod da radi sljedeće: čim se otvori stranica da od korisnika traži da unese
svoje ime, pa da poslije toga unese broj godina. Poslije toga u prozoru treba ispisati velikim slovima
ime korisnika i koliko ima godina*/

var ime = prompt("Unesite ime")
var brgod = prompt ("Unesite broj godina")
document.write( ime + "ima" + brgod + "godina")

/*Zadatak 4
Na stranicu ubaciti dugme sa natpismo „Klikni me ako si sretan“.
Napraviti JavaScript kod da radi sljedeće: Poslije napravljenog klika
u posebnom prozoru ispisati „Ne znam šta ću od sreće silne“.*/

var dugme = prompt("Klikni ako si sretan")
function dugmee() {
    alert("Ne znam sta cu od srece")
 }




