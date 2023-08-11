//             Author: Swaathi Lakshmanan
//             Class: DISM/FT/1A/05
//             CA2
//             Theme: Interactive webiste
//             Date:7/8/2022
//             File name: snakegame.js

var canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var speed = 7;//beginning speed
let grid = 20
let gridsizew= canvas.width/grid-1;//width of rectangles in pixels
let gridsizeh = canvas.height/grid-1//height of rectangles in pixels
let snakex = 10//beginning position of snake
let snakey = 10
const snakebodparts = [];
var snaketail = 1;//body that follows the tail
let applex=5;//beginning positon of apple
let appley=5;
var scorecount = 0;//score
let velx = 0;//velocity of y direction
let vely = 0;//velocity of x direction
var heartcode = "";
class Snakebody{//class for each snake's body part
    constructor(x,y){
        this.x = x;//snake's body part's position
        this.y = y;
    }

    hearts(){
        var heartcodes = ["😻" ,"💚","💓","💕","💖","💗","💘","💙","💛","🧡","💜","🖤","💞","💌","☺","👀","💨","👽","🐳"];
        var chosenHeart = Math.trunc(Math.random()*(heartcodes.length));
        
        return heartcodes[chosenHeart]
        // return heartcodes[chosenHeart]+chosenHeart

    }
}

function mainLoop(){
    // set time out to change how often screen gets updated
    changeSnakePos()
    if (vely!=0||velx!=0){
        if(gameOver()){
            return;
        }
    }
    
    newScreen()
    drawSnake()
    
    drawApple()
    eat()
    console.log(heartcode)
    score()
    setTimeout(mainLoop, 1000/speed)
}

//determine when the game will end

function gameOver(){
    var isOver = false;
    for (var i =0; i<snakebodparts.length; i++){
        if(snakebodparts[i].x==snakex&&snakebodparts[i].y==snakey){
            isOver = true
            i = snakebodparts.length
        }
    }
    document.getElementById('scorehtml').innerHTML = "<p> "+scorecount+"💀"+"<br>OOPS...</p>";
    return isOver
}

//displaying code in html
function score(){
   
    document.getElementById('scorehtml').innerHTML = "<p> "+scorecount+" "+heartcode+"</p>";
    
}

//function to print new screen
function newScreen(){
    ctx.fillStyle ='#d9534f';
    ctx.fillRect(0,0,canvas.width, canvas.height)
}

//function to draw snake every time
function drawSnake(){
    ctx.fillStyle='black'
    ctx.fillRect(snakex*grid, snakey*grid, gridsizew, gridsizeh)
    //to draw for each of the snake's body part (loop)
    for(var i =0; i<snakebodparts.length;i++){
        var part = snakebodparts[i]
        ctx.fillRect(part.x*(grid), part.y*(grid),gridsizew,gridsizeh)
    }
    snakebodparts.push(new Snakebody(snakex, snakey))
    if(snakebodparts.length>snaketail){
        snakebodparts.shift(); //remove the first tail part of snake body so that tail only increases when food is ate
    }
    //if statement for is the snake leaves the screen
    if(snakex<0){
        snakex=21
    }else if(snakex>20){
        snakex=-1
    }else if(snakey<0){
        snakey=21
    }else if(snakey>20){
        snakey=-1
    }
    
}
//change direction
function changeSnakePos(){
    snakex += velx
    snakey += vely
}

//to draw apple
function drawApple(){
    ctx.fillStyle='black'
    ctx.fillRect(applex*grid, appley*grid, gridsizew, gridsizeh)
}

//to generate a new apple and change other values when apple is ate
function eat(){
    if(applex===snakex&&appley===snakey){
        applex = Math.trunc(Math.random()*grid)
        appley = Math.trunc(Math.random()*grid)
        snaketail++
        scorecount++
        heartcode = snakebodparts[0].hearts()
        
    }
}



document.body.addEventListener('keydown', keyDown);

function keyDown(event){
    // up
    if(event.keyCode == "87"){
        if(vely!=0){
            return
        }
        vely = -1;
        velx =0;
        // right
    }else if(event.keyCode == "68"){
        if(velx!=0){
            return
        }
        vely=0;
        velx=1;
        // down
    }else if(event.keyCode =="83"){
        if(vely!=0){
            return
        }
        velx=0;
        vely=1;
        // left
    }else if(event.keyCode=="65"){
        if(velx!=0){
            return
        }
        vely=0;
        velx=-1;
    }
}
mainLoop()