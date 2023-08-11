//             Author: Swaathi Lakshmanan
//             Class: DISM/FT/1A/05
//             CA2
//             Theme: Interactive webiste
//             Date:7/8/2022
//             File name: letters.js


// Credits to Kenneth for the idea, wrote the code from scratch by myself

function generateRandomLetters(n){  
    var newStr = ""; 
    var special = ["&","#","+","*","%","?","£","@","§","$"]       
    for (var x=0; x<n.length; x++){
        var character = special[Math.floor(Math.random()*special.length)]//finds the length of string and creates a new string of the same length with random letters
        newStr += character
    }
    return newStr;
}


function move(className, str) {
    if(document.querySelector(className)==null){
        return; 
    }
    var count =0 
    const id = setInterval(function(){splitStr(className,str);}, 150);
    //split string and generate letters
    function splitStr(className, str){
        if(count==10){
            clearInterval(id);
            document.querySelector(className).innerHTML = str;
        }else{
            count++
            var newStr = ""; 
            var list = str.split(" ");
            for(var i=0;i<list.length;i++){
                newStr+= " "+ generateRandomLetters(list[i]);
            }
            document.querySelector(className).innerHTML = newStr;
            //see string length and spaces
        }
        
    }
  }
    move(".careersHeader","Possible careers")
    move('.coursesHeader','Singapore Polytechnic\'s courses on computing')
    move('.indexHeader','About me')
    // console.log("Possible Careers")
    // document.querySelector(".careersHeader").innerHTML="Possible Careers";