//             Author: Swaathi Lakshmanan
//             Class: DISM/FT/1A/05
//             CA2
//             Theme: Interactive webiste
//             Date:7/8/2022
//             File name: slider.js


var sliderButtonRight = document.querySelector('.sliderButtonRight');
var sliderButtonLeft = document.querySelector('.sliderButtonLeft');
var sliderContent = document.querySelectorAll('.slider-content');

var media1097 = window.matchMedia("(max-width: 1097px")
var media1020 = window.matchMedia("(max-width: 1020px")
var media660 = window.matchMedia("(max-width: 660px)")
var media490 = window.matchMedia("(max-width: 490px)")
var length = 0;
var totallength= 25*4
var perContentlength = 25
var count = 0;

//changes percentage moved by slider depending on the screen size
if(media490.matches){
    totallength = 90*6
    perContentlength = 98
}else if (media660.matches){    
    totallength = 60*6
    perContentlength = 60
}else if(media1020.matches){
    totallength = 50*6
    perContentlength = 50
}else if(media1097.matches){
    totallength = 40*6
    perContentlength = 40
} 


//for slider button when pressed to move right
function moveRight(){
    count++
    length=(-perContentlength)*count
    console.log("pressed")
    
    for(i of sliderContent){
        if(length<-(totallength)){
            length -= perContentlength
            count--
            return
        }
        i.style.left = length+'%'
    }
}

//for slider button when pressed to move left
function moveLeft(){
    count--
    length=(-perContentlength)*count

    console.log("pressed another")
    for(i of sliderContent){
        
        if(length>0){
            length+=perContentlength
            count++
            return
        }
        i.style.left = length+'%'
    }
}