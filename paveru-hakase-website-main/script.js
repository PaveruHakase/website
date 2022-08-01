var offset = [0, 0];
var mousePosition;
var mousePressed = false;
var idName;
var zIndexSet = false;
var zIndexValue = 100;
const windows = document.querySelectorAll('.draggable');
const fullWindows = document.querySelectorAll('.tab')
const windowButtons = document.querySelectorAll('.tab-button');


const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('dblclick', function openTab(event) {
        // console.log(icon.attributes.target.value)
        if (String(icon.attributes.target.value).includes("external")){
            if (String(icon.attributes.target.value).includes("youtube")){
                window.open("https://www.youtube.com/c/PaveruHakase", "_blank")
            }
            else if (String(icon.attributes.target.value).includes("soundcloud")){
                window.open("https://www.soundcloud.com/", "_blank")
            }

            else if (String(icon.attributes.target.value).includes("vimeo")){
                window.open("https://www.vimeo.com/", "_blank")
            }

            else if (String(icon.attributes.target.value).includes("discord")){
                window.open("https://discord.gg/yckVEttK2Q", "_blank")
            }

            else if (String(icon.attributes.target.value).includes("twitch")){
                window.open("https://twitch.tv/paveruhakase_cia", "_blank")
            }

            else if (String(icon.attributes.target.value).includes("instagram")){
                window.open("https://instagram.com/paveruhakase", "_blank")
            }

            else if (String(icon.attributes.target.value).includes("facebook")){
                window.open("https://facebook.com/PaveruHakaseCIA/", "_blank")
            }

        }
        
        
        else{
        
        tabToOpen = document.getElementById(icon.attributes.target.value)
        tabToOpen.classList.add('tab-active')
        tabToOpen.style.zIndex = zIndexValue
        zIndexValue += 1
        console.log(zIndexValue)
        }
    });
}, true);

fullWindows.forEach(fullWindow => {
    fullWindow.addEventListener('mousedown', function placeAbove(event) {
        if (zIndexSet == false) {
            fullWindow.style.zIndex = zIndexValue;
            zIndexValue = zIndexValue + 1;
            zIndexSet = true;
        }
    }, true);

    // get two random number between 15 and 20 set the top and left style values to these numbers
    firstRandomNumber = (Math.random() * (10)) + 15;
    secondRandomNumber = (Math.random() * (10)) + 15;
    fullWindow.style.top = firstRandomNumber + '%';
    fullWindow.style.left = secondRandomNumber + '%';    

}, true);

windowButtons.forEach(button => {
    button.addEventListener('click', function hideWindow(event) {
        button.parentNode.parentNode.classList.remove('tab-active');
    }, true);
}, true);


windows.forEach(tab => {
tab.addEventListener('mousedown', function setOffset(event) {
    mousePressed = true;
    offset = [
        tab.parentNode.offsetLeft - event.clientX,
        tab.parentNode.offsetTop - event.clientY
    ];
    // console.log('hiadfs');
    // console.log(tab.style.backgroundColor);
    idName = tab.id;

    if (zIndexSet == false) {
        tab.parentNode.style.zIndex = zIndexValue;
        zIndexValue = zIndexValue + 1;
        zIndexSet = true;
    }
});
}, true);

document.addEventListener('mouseup', function() {
    mousePressed = false;
    idName = null;
    zIndexSet = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (mousePressed) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        console.log(zIndexValue);
        element = document.getElementById(idName);

        element.parentNode.style.left = (mousePosition.x + offset[0]) + 'px';
        element.parentNode.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);

// var context;
// var radius = 5;
// var numPoints = 40;
// var points = [];
// var width;
// var height;

// function Point(){

//     // random x and y
//     this.x = Math.floor(Math.random()*(width));
//     this.y = Math.floor(Math.random()*(height));
 
//     // random direction, +1 or -1
//     this.dx = Math.floor(Math.random()*2) * 2 - 1;
//     this.dy = Math.floor(Math.random()*2) * 2 - 1;
 
// }
 
// function resizeCanvas() {
//     width = window.innerWidth;
//     height = window.innerHeight;

//     canvas.width = width;
//     canvas.height = height;
// }

// function init()
// {
//   context= canvas.getContext('2d');
//   resizeCanvas();

//   // create an array of balls
//   for(i= 0 ; i < numPoints ; i++){
//     points.push(new Point());
//   }

//   setInterval(draw, 20);
// }

// function drawTriangs() {
  
//     for (i = 0; i < numPoints; i++) {
//         var point = points[i];

//         if( point.x<0 || point.x>width) point.dx=-point.dx; 
//         if( point.y<0 || point.y>height) point.dy=-point.dy; 

//         point.x+=point.dx;
//         point.y+=point.dy;
//     }
  
//   var vertices = points.map(function(d) {
//     return [d.x, d.y];
//   });
  
//   var voronoi = d3.geom.voronoi(vertices);
  
//   for (i = 0; i < voronoi.length; i++) {
    
//     var poly = voronoi[i];
    
//     context.beginPath();
//     context.strokeStyle="#000";

//     context.moveTo(poly[0][0],poly[0][1]);
    
//     for (j = 1; j < poly.length; j++) {
//       context.lineTo(poly[j][0],poly[j][1]);
//     }
    
//     context.closePath();
//     context.stroke();
//   }
  
// }


// function draw()
// {
//     context.clearRect(0,0, width,height);
//     drawTriangs();
// }

// document.addEventListener('DOMContentLoaded', init);


//  // resize the canvas to fill browser window dynamically
// window.addEventListener('resize', resizeCanvas, false);

function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December']; // you get the idea
        
        if (now.getMinutes() < 10) {
            var minutes = '0' + now.getMinutes();
        } else {
            var minutes = now.getMinutes();
        }
        
        time = now.getHours() + ':' + minutes, // again, you get the idea

        // a cleaner way than string concatenation
        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('date-value').innerHTML = date
    document.getElementById('time-value').innerHTML = time

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call