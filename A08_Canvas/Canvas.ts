namespace L08_1_GenerativeKunst {

  window.addEventListener("load", handleLoad);

  let crc2: CanvasRenderingContext2D;
  let reloadButton: HTMLButtonElement;

  function handleLoad(_event: Event): void {

      let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight -100;

     
      crc2 = canvas.getContext("2d")!;

      /*let gradient = crc2.createLinearGradient(0, 0, 200, 500);
      gradient.addColorStop(0, "blue");
      gradient.addColorStop(.5, "grey");
      gradient.addColorStop(innerWidth, "yellow");

      crc2.fillStyle = gradient;
      crc2.fillRect(0, 0, innerWidth, innerHeight-100);*/
      
     circle();
  }

  function circle(): void {
      for (let i: number = 0; i < 250; i++) {

          let color1: number = Math.floor(Math.random() * 400);
          let color2: number = Math.floor(Math.random() * 0);
          let color3: number = Math.floor(Math.random() * 200);

          crc2.beginPath();
          crc2.arc(Math.floor(Math.random() * (innerWidth) + 3), Math.floor(Math.random() * (innerHeight) + 5), Math.floor(Math.random() * (60) + 2), 0, 2 * Math.PI);
          crc2.stroke();
          crc2.closePath();

          crc2.fillStyle = "rgb(" + color1 + ", " + color2 + "," + color3 + ")";
          crc2.fill();

      }
      //triangle
      for (let i: number = 0; i < 15; i++) {
          let x: number = Math.random() * innerWidth;
          let y: number = Math.random() * innerHeight;
          drawTriangle(x, y);
      }
      //block
      for (let i: number = 0; i < 15; i++) {
          let x: number = Math.random() * innerWidth;
          let y: number = Math.random() * innerHeight;
          drawBlock(y, x);
      }
  }

  function drawTriangle(_x: number, _y: number): void {
      crc2.beginPath();
      crc2.moveTo(_x, _y);
      crc2.lineTo(_x, _y + 100);
      crc2.lineTo(_x + 60, _y + 50);
      crc2.closePath();

      crc2.fillStyle = "white";
      crc2.strokeStyle = "aqua";
      crc2.lineWidth = 20;
      crc2.stroke();
      crc2.fill();


  }

  function drawBlock(_x: number, _y: number): void {
      
    let color1: number = Math.floor(Math.random() * 700);
    let color2: number = Math.floor(Math.random() * 300);
    let color3: number = Math.floor(Math.random() * 100);

    let stroke1: number = Math.floor(Math.random() * 1000);
    let stroke2: number = Math.floor(Math.random() * 200);
    let stroke3: number = Math.floor(Math.random() * 1000);


    crc2.beginPath();
      crc2.moveTo(_x, _y);
      crc2.lineTo(_x-50, _y - 50);
      crc2.lineTo(_x, _y - 100);
      crc2.lineTo(_x+50, _y-50);
      crc2.closePath();

      crc2.fillStyle = "rgb(" + color1 + ", " + color2 + "," + color3 + ")";
      crc2.strokeStyle = "rgb(" + stroke1 + ", " + stroke2 + "," + stroke3 + ")";
      crc2.lineWidth = _x % 150;
      crc2.stroke();
      crc2.fill();
      reloadButton = document.querySelector("#reloadButton")!;
      reloadButton.addEventListener("click", reload);
  }
  
  function reload(): void {
      window.location.reload();
  }

}