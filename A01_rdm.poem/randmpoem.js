"use strict";
let text = "Expecto Patronum";
//console.log (text);
let subjekt;
subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let praedikat;
praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objekt;
objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
//console.log(objekt, praedikat, objekt);
for (let index = subjekt.length; index > 0; index--) {
    getVerse(subjekt, praedikat, objekt);
}
function getVerse(_subjekt, _praedikat, _objekt) {
    let vers = "";
    let zufallsZahlsubjekt = Math.floor(Math.random() * subjekt.length);
    let zufallsZahlpraedikat = Math.floor(Math.random() * subjekt.length);
    let zufallsZahlobjekt = Math.floor(Math.random() * subjekt.length);
    vers = vers + _subjekt.splice(zufallsZahlsubjekt, 1) + " " + _praedikat.splice(zufallsZahlpraedikat, 1) + " " + _objekt.splice(zufallsZahlobjekt, 1);
    console.log(vers);
    return ("Aloha");
}
//# sourceMappingURL=randmpoem.js.map