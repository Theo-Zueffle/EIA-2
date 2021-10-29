var A03_EventInspecor;
(function (A03_EventInspecor) {
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
        var mouseX = _event.pageX;
        var mouseY = _event.pageY;
        var mousePosition = document.querySelector("span");
        var mouseTarget = _event.target;
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
})(A03_EventInspecor || (A03_EventInspecor = {}));
//# sourceMappingURL=Event.js.map