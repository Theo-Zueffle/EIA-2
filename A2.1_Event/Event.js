"use strict";
var A2_1_EventInspecor;
(function (A2_1_EventInspecor) {
    window.addEventListener("load", handleLoad);
    //handleLoad 
    function handleLoad(_event) {
        //install mouse move, click, keyup listener on document
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        //install click, keyup listener on body
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        //install click, keyup listener on all divs
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("keyup", logInfo);
    }
    //setInfoBox 
    function setInfoBox(_event) {
        let mouseX = _event.pageX;
        let mouseY = _event.pageY;
        let mousePosition = document.querySelector("span");
        let mouseTarget = _event.target;
        mousePosition.innerHTML = "target:" + mouseTarget + "" + "<br>" + "x:" + mouseX + "<br>" + "y:" + mouseY;
        mousePosition.style.left = mouseX + 3 + "px";
        mousePosition.style.top = mouseY + 3 + "px";
    }
    //logInfo
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(A2_1_EventInspecor || (A2_1_EventInspecor = {}));
//# sourceMappingURL=Event.js.map