/*In Zusammenarbeit mit Herbert, Liz, Kriss und Edwin auf Discord sowie dem Youtube Video:
"https://www.youtube.com/watch?v=OsFwOzr3_sE&feature=youtu.be"
Aber hauptsächlich hat Herbert uns geholfen */

/*
Aufgabe: <Aufgabe09 OldMacDonald>
Name: <Theo Züffle>
Matrikel: <268027>
Datum: <3. Dezember 202>
Quellen: <In Zusammenarbeit mit Herbert, Liz, Kriss und Edwin auf Discord sowie dem Youtube Video:"https://www.youtube.com/watch?v=OsFwOzr3_sE&feature=youtu.be". Aber hauptsächlich Herbert!>
*/

class Animal {
    animalType: string;
    name: string;
    sound: string;
    foodType: string;
    foodRation: number;
    foodAmount: number;

    constructor(a: string, n: string, s: string, t: string, r: number, f: number) {
        this.animalType = a;
        this.name = n;
        this.sound = s;
        this.foodType = t;
        this.foodRation = r;
        this.foodAmount = f;
    }

    food() {
        return `<b>${this.foodType}</b> : ${this.foodAmount} kg, <br>`;
    }

    lyrics() {
        return `<br>Old MacDonald had a farm <br>
                E-I-A-I-O<br>
                And on his farm he had a ${this.animalType}<br>
                E-I-A-I-O,<br>
                <br><b><u>${this.name}:</u></b><br> 
                With a ${this.sound}-${this.sound} here <br>
                And a ${this.sound}-${this.sound} there <br> 
                Here a ${this.sound}, there a ${this.sound} <br> 
                Everywhere ${this.sound}-${this.sound}<br> 
                Old MacDonald had a farm<br> 
                E-I-A-I-O.<br>`;
    }
}
window.addEventListener("load", handleLoad);
const animal1 = new Animal("Dog", "Ole", "wuff", "Meat", 5, 50);
const animal2 = new Animal("Cat", "Simba", "miau", "Tuna", 2, 20);
const animal3 = new Animal("Cow", "Ludwig", "muuh", "Weed", 10, 200);
const animal4 = new Animal("Pig", "Dennis", "oink", "Potatoes", 15, 150);
const animal5 = new Animal("Sheep", "Steve", "määh", "Hay", 5, 100);

let foodDisplay: HTMLDivElement;
let animalDisplay: HTMLDivElement;
let nextDay: HTMLButtonElement;


function handleLoad(_event: Event): void {
    foodDisplay = <HTMLDivElement>document.getElementById("food");
    animalDisplay = <HTMLDivElement>document.getElementById("animals");
    nextDay = <HTMLButtonElement>document.getElementById("nextDay")
    foodDisplay.innerHTML = animal1.food() + animal2.food() + animal3.food() + animal4.food() + animal5.food();
    nextDay.addEventListener("click", dog);
    setTimeout(dog, 1000);

    function dog(): void {
        nextDay.style.display = "none";
        animal1.foodAmount = animal1.foodAmount - animal1.foodRation;
        animalDisplay.innerHTML = animal1.lyrics();
        updateFood();
        setTimeout(cat, 1000); 
    }

    function cat(): void {
        animal2.foodAmount = animal2.foodAmount - animal2.foodRation;
        animalDisplay.innerHTML += animal2.lyrics();
        updateFood();
        setTimeout(cow, 1000);
    }
    function cow(): void {
        animal3.foodAmount = animal3.foodAmount - animal3.foodRation;
        animalDisplay.innerHTML += animal3.lyrics();
        updateFood();
        setTimeout(pig, 1000);
    }
    function pig(): void {
        animal4.foodAmount = animal4.foodAmount - animal4.foodRation;
        animalDisplay.innerHTML += animal4.lyrics();
        updateFood();
        setTimeout(sheep, 1000);
    }

    function sheep(): void {
        animal5.foodAmount = animal5.foodAmount - animal5.foodRation;
        animalDisplay.innerHTML += animal5.lyrics();
        nextDay.style.display = "inline";
        updateFood();
    }

    function updateFood(): void{
        foodDisplay.innerHTML = animal1.food() + animal2.food() + animal3.food() + animal4.food() + animal5.food();
    }
}
