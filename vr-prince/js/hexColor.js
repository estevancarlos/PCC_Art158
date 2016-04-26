// http://stackoverflow.com/questions/19639506/continuous-color-transition

/* ==================== Required Functions ==================== */
function getElementBG() {
    var bg	= document.querySelector('#sky-1').getAttribute('color');
    bg	= bg.match(/\((.*)\)/)[1];
    bg	= bg.split(",");
    for (var i = 0; i < bg.length; i++) {
        bg[i] = parseInt(bg[i], 10);
    }
    if (bg.length > 3) { bg.pop(); }
    return bg;
}

function generateRGB(min, max) {
    var min		= min || 0;
    var max		= max || 255;
    var color	= [];
    for (var i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * max);
        while (num < min) {
            num = Math.floor(Math.random() * max);
        }
        color.push(num);
    }
    return color;
}

function calculateDistance(colorArray1, colorArray2) {
    var distance = [];
    for (var i = 0; i < colorArray1.length; i++) {
        distance.push(Math.abs(colorArray1[i] - colorArray2[i]));
    }
    return distance;
}

function calculateIncrement(distanceArray, fps, duration) {
    var fps			= fps || 30;
    var duration	= duration || 1;
    var increment	= [];
    for (var i = 0; i < distanceArray.length; i++) {
        increment.push(Math.abs(Math.floor(distanceArray[i] / (fps * duration))));
        if (increment[i] == 0) {
            increment[i]++;
        }
    }
    return increment;
}

function rgb2hex(colorArray) {
    var hex = [];
    for (var i = 0; i < colorArray.length; i++) {
        hex.push(colorArray[i].toString(16));
        if (hex[i].length < 2) { hex[i] = "0" + hex[i]; }
    }
    return "#" + hex.join("");
}

/* ==================== Setup ==================== */
var fps				= 30;
var duration		= 3;
var transElement	= main;
var currentColor	= getElementBG();

var targetColor		= generateRGB();
var distance		= calculateDistance(currentColor, targetColor);
var increment		= calculateIncrement(distance, fps, duration);

var intervalHandler	= null;

startTransition();

/* ==================== Transition Initiator ==================== */
function startTransition() {
    clearInterval(intervalHandler);

    targetColor	= generateRGB();
    distance	= calculateDistance(currentColor, targetColor);
    increment	= calculateIncrement(distance, fps, duration);

    intervalHandler = setInterval(function() {
        transition();
    }, 1000/fps);
}

/* ==================== Transition Calculator ==================== */
function transition() {
    // checking R
    if (currentColor[0] > targetColor[0]) {
        currentColor[0] -= increment[0];
        if (currentColor[0] <= targetColor[0]) {
            increment[0] = 0;
        }
    } else {
        currentColor[0] += increment[0];
        if (currentColor[0] >= targetColor[0]) {
            increment[0] = 0;
        }
    }

    // checking G
    if (currentColor[1] > targetColor[1]) {
        currentColor[1] -= increment[1];
        if (currentColor[1] <= targetColor[1]) {
            increment[1] = 0;
        }
    } else {
        currentColor[1] += increment[1];
        if (currentColor[1] >= targetColor[1]) {
            increment[1] = 0;
        }
    }

    // checking B
    if (currentColor[2] > targetColor[2]) {
        currentColor[2] -= increment[2];
        if (currentColor[2] <= targetColor[2]) {
            increment[2] = 0;
        }
    } else {
        currentColor[2] += increment[2];
        if (currentColor[2] >= targetColor[2]) {
            increment[2] = 0;
        }
    }

    // apply the new modified color
    var c = rgb2hex(currentColor);
    document.querySelector('#sky-1').setAttribute('material', 'color', c);

    // transition ended. start a new one
    if (increment[0] == 0 && increment[1] == 0 && increment[2] == 0) {
        startTransition();
    }
}