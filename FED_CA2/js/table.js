//             Author: Swaathi Lakshmanan
//             Class: DISM/FT/1A/05
//             CA2
//             Theme: Interactive webiste
//             Date:7/8/2022
//             File name: table.js

//change colour of when element is hovered over
function colour(className,colour,light){
    var elementClass= document.querySelectorAll(className)
    if(light==true){
        for(var i = 0; i<elementClass.length; i++){
            //checks if colour is yellow or lght blue before changing text colour
            if(colour!="bg-info"&&colour!="bg-warning"){
                elementClass[i].classList.add("text-light")
            }  
            //adding class  
            elementClass[i].classList.add(colour)
        }
        
    }else if(light==false){
        for(var i = 0; i<elementClass.length; i++){
            if(colour!="bg-info"&&colour!="bg-warning"){
                elementClass[i].classList.remove("text-light")
            }    
            //removing class
            elementClass[i].classList.remove(colour)
        }
    }
}

//for all different classes
function catFunction(){
    colour(".CAT1", "bg-primary",true)
}
function catFunction2(){
    colour(".CAT1", "bg-primary",false)
}
function cprFunction(){
    colour(".CPR1", "bg-secondary",true)
}
function cprFunction2(){
    colour(".CPR1", "bg-secondary",false)
}
function fedFunction(){
    colour(".FED1", "bg-success",true)
}
function fedFunction2(){
    colour(".FED1", "bg-success",false)
}
function fopFunction(){
    colour(".FOP1","bg-danger",true)
}
function fopFunction2(){
    colour(".FOP1","bg-danger",false)
}
function focFunction(){
    colour(".FOC1","bg-warning",true)
}
function focFunction2(){
    colour(".FOC1","bg-warning",false)
}
function mathFunction(){
    colour(".MATH1","bg-info",true)
}
function mathFunction2(){
    colour(".MATH1","bg-info",false)
}
function ecgFunction(){
    colour(".ECG1","bg-dark",true)
}
function ecgFunction2(){
    colour(".ECG1","bg-dark",false)
}
