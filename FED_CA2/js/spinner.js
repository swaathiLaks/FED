//             Author: Swaathi Lakshmanan
//             Class: DISM/FT/1A/05
//             CA2
//             Theme: Interactive webiste
//             Date:7/8/2022
//             File name: spinner.js

var img = document.querySelector(".tinyImg");
var pageLength = window.length//document.getElementsByTagName('HTML')[0].outerHTML.length;
var page = document.querySelector('HTML');
var pageLength=document.querySelector('body').outerHTML.length;

function spin(){
    //to change tinyIMG rotation each time it is scrolled
    distance =(page.scrollTop)/(window.innerHeight);
    var distDegree= "rotate("+(distance*360)+"deg)";
    
   document.querySelector(".tinyImg").style.transform = distDegree;
   
}
window.addEventListener("scroll", spin);
