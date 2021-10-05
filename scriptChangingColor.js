function changingColor(){

    var redValue = 0;
    var greenValue = 0;
    var blueValue = 0;

    setInterval(updateColor, 1000);

    function updateColor(){
        blueValue += 100;

        if (blueValue > 255 && redValue != 255){
            blueValue -= 255;
            greenValue += 1;
        }

        if (greenValue >  255 && redValue != 255){
            greenValue -= 255;
            redValue += 1;
        }

        if (redValue > 255){
            redValue = 255;
            
        }

        if (blueValue > 255 && redValue == 255 && greenValue == 255){
            redValue = 255;
            greenValue = 255;
            blueValue = 255;
        }
        
        
        
        document.getElementById("container").style.backgroundColor = "rgb" + "(" + redValue + "," + greenValue + "," + blueValue + ")";

        document.getElementById("redValueContainer").innerHTML = redValue;
        document.getElementById("greenValueContainer").innerHTML = greenValue;
        document.getElementById("blueValueContainer").innerHTML = blueValue;

    }

}