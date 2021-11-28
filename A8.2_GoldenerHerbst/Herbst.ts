//In Zusammenarbeit mit Ediwin, Liz und Hannah im Praktikum mit Betreuer und Teilweise privat
namespace canvas2 {
    
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;
    let horizon: number;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

       horizon = crc2.canvas.height * golden;

        drawBackground();
        drawSun({x:100, y:75});
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({x: 0, y: horizon}, 75, 200, "grey", "white");
        drawMountains({x: 0, y: horizon}, 50, 150, "grey", "lightgrey");
        drawFirs();
        drawDeciduousTree({x: 20, y: 420});
        drawDeciduousTree({x: 200, y: 400});
        drawDeciduousTree({x: 500, y: 500});
        drawDeciduousTree({x: 700, y: 450});
        drawDeciduousTree({x: 100, y: 550});
        drawDeciduousTree({x: 610, y: 580});
        drawLeaf();
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
        gradient.addColorStop(0, "HSL(240, 60%, 60%)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(90, 80%, 50%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0,0, crc2.canvas.width, crc2.canvas.height);

    }
    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }


    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let numberParticles: number = 20;
        let radiusParticles: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0,0,0,0,0, radiusParticles);

        particle.arc(0,0, radiusParticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let i: number = 0; i < numberParticles; i++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();

    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        

        crc2.save();
        crc2. translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0,0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x,y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x,0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }
    function drawFirs(): void {
        let nFirs: number = 15;
        let x: number = Math.round(Math.random());
        let y: number = Math.round(Math.random());
    
        for (let drawn: number = 0; drawn < nFirs; drawn++) {
          
          crc2.save();
          x += x + Math.round(Math.random());
          crc2.translate(x, y);
          drawFir();
          crc2.restore();
        }
    }

    function drawFir(): void {
        //console.log("Fir");
        crc2.save();
        crc2.translate(200, horizon);
        crc2.scale(1, 2);
        crc2.beginPath();
        crc2.rect(-5, -20, 10, 20);
        crc2.closePath();
        crc2.fillStyle = "hsl(41, 68%, 22%)";
        crc2.fill();
    
        crc2.beginPath();
        crc2.moveTo(0, -70);
        crc2.lineTo(-23, -45);
        crc2.lineTo(-15, -50);
        crc2.lineTo(-27, -27);
        crc2.lineTo(-20, -32);
        crc2.lineTo(-35, -7);
        crc2.lineTo(0, -18);
        crc2.lineTo(35, -7);
        crc2.lineTo(20, -32);
        crc2.lineTo(27, -27);
        crc2.lineTo(15, -50);
        crc2.lineTo(23, -45);
        crc2.moveTo(0, -70);
        crc2.closePath();
    
        crc2.fillStyle = "hsl(166, 68%, 43%)";
        
    
        crc2.fill();
        crc2.restore();
    }

        //https://www.youtube.com/watch?v=Ymbv6m3EuNw&t=618s hab den Part mit dem Baum nur Teilweise verstanden 

    /*let DeciduousTree: any[];

    function generateDTree(){
        let h = 60 + Math.random() * 80; //height

        let r1 = 32 + Math.random() * 16; //radius
        let r2 = 32 + Math.random() * 16;
        let r3 = 32 + Math.random() * 16;
        let r4 = 32 + Math.random() * 16;
        let r5 = 32 + Math.random() * 16;
        let r6 = 32 + Math.random() * 16;
        let r7 = 32 + Math.random() * 16;

        let treeColors = ["#6D8821", "#8FAC34", "#98B333"];
        let color = treeColors[Math.floor(Math.random() *3)];

     DeciduousTree.push({ h, r1, r2, r3, r4, r5, r6, r7, color});
    }

     generateDTree();
     generateDTree();
     generateDTree();*/

    function drawDeciduousTree(_position: Vector): void {
       /*DeciduousTree.forEach(({ h, r1, r2, r3, r4, r5, r6, r7, color }) => {
            //Trunk
            let trunkWidth = 40;
            crc2.fillStyle = "#885F37";
            crc2.beginPath();
            crc2.moveTo(-trunkWidth / 2, 0);
            crc2.quadraticCurveTo(-trunkWidth / 4, -h / 2, -trunkWidth / 2, -h);
            crc2.lineTo(trunkWidth / 2, -h);
            crc2.quadraticCurveTo(trunkWidth / 4, -h  / 2, trunkWidth / 2, 0);
            crc2.closePath();
            crc2.fill();

            //Crown
            crc2. fillStyle = color;
            drawCircles(-20, -h -15, r1);
            drawCircles(-30, -h -25, r2);
            drawCircles(-20, -h -35, r3);
            drawCircles(0, -h -45, r4);
            drawCircles(20, -h -35, r5);
            drawCircles(30, -h -25, r6);
            drawCircles(20, -h -15, r7);
            
        });*/
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();

        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -100);

        //crown
        crc2.fillStyle = "hsla(50, 100%, 54%, 0.8)";
        drawCircles(5, -100, 45);
        drawCircles(-30, -120, 45);
        drawCircles(-25, -140, 45);
        crc2.fillStyle = "hsla(40, 100%, 51%, 0.6)";
        drawCircles(4, -170, 45);
        drawCircles(25, -140, 45);
        crc2.fillStyle = "hsla(0, 100%, 54%, 0.4)";
        drawCircles(30, -120, 45);
    
    
        function drawCircles (_x: number, _y: number, _radius: number): void {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            crc2.fill();
        }
            crc2.restore();
        
    }

    function drawLeaf(): void {
        console.log("leaf");

        let nLeafs: number= 1000;
        let x: number = Math.random()%800;
        let y: number = Math.random()%600 ;

        for (let drawn: number = 0; drawn < nLeafs; drawn++) {
            crc2.save();
            //x += x + Math.round(Math.random());
           // y += y +  Math.round(Math.random());
           x += x+1;
           y += y+1;
            crc2.translate(x, y);
            crc2.rotate(x);
            drawLeave1();
            crc2.restore();
        }
    }
    
        function drawLeave1(): void {
            let color1: number = Math.floor(Math.random() * 150);
            let color2: number = Math.floor(Math.random() * 1);
            let color3: number = Math.floor(Math.random() * 20);
            console.log("leaves");
            crc2.save();
            crc2.translate(300, 400);
            //crc2.scale(2, 2);

            crc2.beginPath();
            crc2.moveTo(0, -50);
            crc2.lineTo(-5, -37);
            crc2.lineTo(-15, -40);
            crc2.lineTo(-12, -28);
            crc2.lineTo(-25, -23);
            crc2.lineTo(-12, -17);
            crc2.lineTo(-15, -8);
            crc2.lineTo(0, -15);
            crc2.lineTo(15, -8);
            crc2.lineTo(12, -17);
            crc2.lineTo(25, -23);
            crc2.lineTo(12, -28);
            crc2.moveTo(15, -40);
            crc2.moveTo(5, -37);
            crc2.moveTo(0, -50);
            crc2.closePath();
            
            crc2.fillStyle = "rgb(" + color1 + ", " + color2 + "," + color3 + ")";
            crc2.fill();
            crc2.restore();
        }
       

       /* crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "rgb(" + color1 + ", " + color2 + "," + color3 + ")";

        for (let i: number = 0; i < nLeafs; i++) {
            crc2.save();
            let x: number = (Math.random()-0,5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(leafs);
            crc2.restore;*/


  
           /* let color1: number = Math.floor(Math.random() * 255);
            let color2: number = Math.floor(Math.random() * 0);
            let color3: number = Math.floor(Math.random() * 200);

            crc2.save();
            crc2.translate


            crc2.beginPath();
            crc2.moveTo(0, -50);
            crc2.lineTo(-10, -35);
            crc2.lineTo(-20, -40);
            crc2.lineTo(-15, -35);
            crc2.lineTo(-30, -30);
            crc2.lineTo(-15, -25);
            crc2.lineTo(-20, -15);
            crc2.lineTo(0, -20);
            crc2.lineTo(20, -15);
            crc2.lineTo(15, -25);
            crc2.lineTo(30, -30);
            crc2.lineTo(15, -35);
            crc2.moveTo(20, -40);
            crc2.moveTo(10, -35);
            crc2.moveTo(0, -50);
            crc2.closePath();
        
  
            crc2.fillStyle = "rgb(" + color1 + ", " + color2 + "," + color3 + ")";
            crc2.fill();
            //crc2.restore();
            console.log("blätter");*/
        
    


}