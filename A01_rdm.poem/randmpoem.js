var text = "Expecto Patronum";
//console.log (text);
var subjekt;
subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var praedikat;
praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var objekt;
objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
//console.log(objekt, praedikat, objekt);
for (var index = subjekt.length; index > 0; index--) {
    getVerse(subjekt, praedikat, objekt);
}
function getVerse(_subjekt, _praedikat, _objekt) {
    var vers = "";
    var zufallsZahlsubjekt = Math.floor(Math.random() * subjekt.length);
    var zufallsZahlpraedikat = Math.floor(Math.random() * subjekt.length);
    var zufallsZahlobjekt = Math.floor(Math.random() * subjekt.length);
    vers = vers + _subjekt.splice(zufallsZahlsubjekt, 1) + " " + _praedikat.splice(zufallsZahlpraedikat, 1) + " " + _objekt.splice(zufallsZahlobjekt, 1);
    console.log(vers);
    return ("Aloha");
}
//# sourceMappingURL=randmpoem.js.map