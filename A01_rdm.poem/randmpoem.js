var text = "Expecto Patronum";
//console.log (text);
var subjekt;
subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var praedikat;
praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var objekt;
objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
console.log(objekt, praedikat, objekt);
for (var index = subjekt.length; index > 0; index--) {
    getVerse(subjekt, praedikat, objekt);
}
function getVerse(_subjekt, _praedikat, _objekt) {
    var vers = "";
    var zufallsZahl = Math.floor(Math.random() * subjekt.length);
    console.log(zufallsZahl);
    return ("Alhonjb");
}
//# sourceMappingURL=randmpoem.js.map