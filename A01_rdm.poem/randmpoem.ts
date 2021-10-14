let text: string = "Expecto Patronum";
//console.log (text);

let subjekt: string[]; 
subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]; 

let praedikat: string[]; 
praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]; 

let objekt: string[]; 
objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
//console.log(objekt, praedikat, objekt);

for (let index: number = subjekt.length; index > 0 ; index --) {
getVerse (subjekt, praedikat, objekt);
} 
function getVerse (_subjekt: string[], _praedikat: string[], _objekt: string[]): string {
let vers: string = "";
let zufallsZahlsubjekt: number = Math.floor(Math.random() * subjekt.length);
let zufallsZahlpraedikat: number = Math.floor(Math.random() * subjekt.length);
let zufallsZahlobjekt: number = Math.floor(Math.random() * subjekt.length);
vers = vers + _subjekt.splice(zufallsZahlsubjekt, 1) + " " + _praedikat.splice(zufallsZahlpraedikat, 1) + " " + _objekt.splice(zufallsZahlobjekt, 1);
console.log(vers);
return ("Aloha");
}