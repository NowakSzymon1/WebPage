let circle = document.getElementById("circle");
    upBtn = document.getElementById("upBtn");
    downBtn = document.getElementById("downBtn");
    rotateValue = circle.style.transform;
    rotateSum = 0;

    upBtn.onClick = function(){
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    }