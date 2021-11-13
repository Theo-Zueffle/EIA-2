"use strict";
//Zusammenarbeit mit Liz 
var SequenzmemorySettings;
(function (SequenzmemorySettings) {
    window.addEventListener("load", handleLoad);
    let startButton;
    let nodeList;
    let sequenceArray;
    let counter = 0;
    let frame;
    let slider;
    let backgroundColor;
    let cardColor;
    let fontColor;
    let input;
    let stepperTime;
    let card;
    let savedArray;
    //let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
    //console.log(formData);
    function handleLoad(_event) {
        input = document.querySelector("#codeWord");
        frame = document.querySelector("#formFrame");
        //let slider: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("input#size");
        startButton = document.getElementById("startButton");
        startButton.addEventListener("click", startGame);
        frame.addEventListener("change", handleForm);
        //handleChange(_event);
    }
    //console.log(startGame);
    function handleForm(_event) {
        /*let inputs: NodeListOf<HTMLInputElement> =
          document.querySelectorAll("input");
        console.log(inputs);
        let font: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        console.log(font.value);*/
        let formData = new FormData(document.forms[0]);
        //console.log(formData);
        for (let entry of formData) {
            console.log(entry);
            let item = (document.querySelector("[value='" + entry[1] + "']"));
            console.log(item);
        }
    }
    function startGame() {
        frame = document.getElementById("formFrame");
        frame.classList.add("hidden");
        sequenceArray = input.value.split("");
        for (let index = 0; index <= sequenceArray.length; index++) {
            let shuffleNumber = Math.floor(Math.random() * sequenceArray.length);
            //console.log(shuffleNumber);
            card = document.createElement("span");
            document.body.appendChild(card);
            card.innerHTML = sequenceArray[shuffleNumber];
            sequenceArray.splice(shuffleNumber, 1);
            console.log(sequenceArray);
            card.classList.add("card" + index);
        }
        /*setTimeout(function (): void {
          hideCards();
        },         2000 );*/
    }
    function hideCards() {
        let savedArray = NodeListOf < HTMLSpanElement > document.querySelectorAll("span");
        //savedArray.push(input.value); 
        console.log(savedArray);
        //savedArray = input.value.split("");
        for (let index = 0; index <= savedArray.length; index++) {
        }
        card.classList.add("hidden");
        console.log("Hello");
    }
})(SequenzmemorySettings || (SequenzmemorySettings = {}));
//# sourceMappingURL=Sequenz.js.map