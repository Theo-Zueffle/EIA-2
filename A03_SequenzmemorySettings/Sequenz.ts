//Zusammenarbeit mit Liz 
namespace SequenzmemorySettings {

    window.addEventListener("load", handleLoad);
  
    let startButton: HTMLButtonElement;
    let nodeList: NodeListOf<HTMLInputElement>;
    let sequenceArray: string[];
    let counter: number = 0;
    let frame: HTMLDivElement;
    let slider: HTMLInputElement;
    let backgroundColor: HTMLInputElement;
    let cardColor: HTMLInputElement;
    let fontColor: HTMLInputElement;
    let input: HTMLInputElement;
    let stepperTime: HTMLInputElement;
    let card: HTMLSpanElement;
    let savedArray: HTMLSpanElement[];
  
    //let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
    //console.log(formData);
  
    function handleLoad(_event: Event): void {
      input = <HTMLInputElement>document.querySelector("#codeWord");
      frame = <HTMLDivElement>document.querySelector("#formFrame");
  
      //let slider: HTMLInputElement = <HTMLInputElement>(
      document.querySelector("input#size");
      startButton = <HTMLButtonElement>document.getElementById("startButton");
      startButton.addEventListener("click", startGame);
      frame.addEventListener("change", handleForm);
  
      //handleChange(_event);
    }
    //console.log(startGame);
  
    function handleForm(_event: Event): void {
      /*let inputs: NodeListOf<HTMLInputElement> =
        document.querySelectorAll("input");
      console.log(inputs);
      let font: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
      console.log(font.value);*/
      let formData: FormData = new FormData(document.forms[0]);
      //console.log(formData);
      for (let entry of formData) {
        console.log(entry);
        let item: HTMLInputElement = <HTMLInputElement>(
          document.querySelector("[value='" + entry[1] + "']")
        );
        console.log(item);
      }
    }
  
    function startGame(): void {
      frame = <HTMLDivElement>document.getElementById("formFrame");
      frame.classList.add("hidden");
      sequenceArray = input.value.split("");
  
      for (let index: number = 0; index <= sequenceArray.length; index++) {
        let shuffleNumber: number = Math.floor(
          Math.random() * sequenceArray.length
        );
        //console.log(shuffleNumber);
        card = <HTMLSpanElement>document.createElement("span");
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
  
    function hideCards(): void {
      let savedArray = NodeListOf<HTMLSpanElement>document.querySelectorAll("span");
      
  
      //savedArray.push(input.value); 
      console.log(savedArray);
      //savedArray = input.value.split("");
  
      for (let index = 0; index <= savedArray.length; index++) {
    
      }
  
      card.classList.add("hidden");
      
      console.log("Hello");
    }
  }
