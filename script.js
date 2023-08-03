 function startTime(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let mode = "AM";

    // time format
    if(hour >11){
        mode = "PM";
        if(hour > 12){
            hour -=12;
        }
    }
    // add zero if less than 10

    hour = concatZero(hour);
    minutes = concatZero(minutes);
    seconds = concatZero(seconds);

   document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + " " + mode;  
    setTimeout(startTime, 500);

 }
 
 function concatZero(value){
    if(value<10){
        value = '0'+ value;
    }
    return value;
 }

//  screen
let screen = document.getElementById("screen");


// type of screen

function press(numValue){
    if(screen.value == 0){
        screen.value = '';
    }
    screen.value += numValue;
}

// clear screen
function clearScreen(val){
    screen.value = val;
}

// Delete key 

function backSpace(){
    const space = screen;
    screen.value = space.value.substring(0, space.value.length -1);  
}


// calculate function

function calculate(){
    if(screen.value != ''){
        try{
            clearScreen(eval(screen.value)); 
        }catch(e){
            clearScreen("Invalid Screen");
        }
    }
} 

// Function for sin, cos and tan

function sine(){
    screen.value = Math.sin(screen.value * Math.PI / 180);
}

function cosine(){
    screen.value = Math.cos(screen.value * Math.PI / 180);
}

function tan(){
    screen.value = Math.tan(screen.value * Math.PI / 180);
}

// Functions for calculating inverse sine, inverse cosine and inverse tan

function inverseSine(){
    screen.value = Math.asin(screen.value) * (180 / Math.PI);
}

function inverseCosine(){
    screen.value = Math.acos(screen.value) * (180 / Math.PI);
}

function inverseTan(){
    screen.value = Math.atan(screen.value) * (180 / Math.PI);
}


// calculate the natural logarithm 

function ln(){
    screen.value = Math.log(screen.value);
}

function log(){
    screen.value = Math.log10(screen.value)
}

// Function for percentages

function percent(){
    screen.value = (screen.value / 100);
}

// Function for square, cube and square roots

function square(){
    screen.value = Math.pow(screen.value, 2);
}
function cube(){
    screen.value = Math.pow(screen.value, 3);
}
function sqrt(){
    screen.value = Math.sqrt(screen.value);
}

// Function for plus-minus

function plusMinus(){
    let x = screen;
    let y = x.value;
    y = y * -1;
    x.value = y;
}

// Exp
function exp(){
    screen.value = Math.pow(10, screen.value)
}