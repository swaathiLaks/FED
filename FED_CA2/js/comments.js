
//             Author: Swaathi Lakshmanan
//             Class: DISM/FT/1A/05
//             CA2
//             Theme: Interactive webiste
//             Date:7/8/2022
//             File name: comments.js


// comment function
//
//references to html document
var commenting = document.querySelector(".commenting");
var comsub = document.querySelector("#comsub");
function comsub_Pressed(){
    //get value
    var userName = document.querySelector("#userName").value;
    var commentTitle = document.querySelector("#commentTitle").value;
    var commentContent = document.querySelector("#commentContent").value;
    console.log(userName + commentTitle + commentContent);

    if (userName==""){
        userName="anonymous";
    }

    //create new text nodes
    var userName = document.createTextNode("@ "+userName);
    commentTitle = document.createTextNode(commentTitle);
    commentContent = document.createTextNode(commentContent);

    //create card, card-body, card-title, card-subtitle, card-text
    card = document.createElement('div');
    cardBody = document.createElement('div');
    cardTitle = document.createElement('h5');
    cardSubTitle = document.createElement('h6');
    cardText = document.createElement('p');

    //adding classes
    card.classList.add("card","but-dec","shadow",
    'm-3')
    cardBody.classList.add("card-body")
    cardTitle.classList.add("card-Title")
    cardSubTitle.classList.add("card-subtitle")
    cardText.classList.add("card-text")
    //appending
    commenting.append(card)
    card.append(cardBody)
    cardBody.append(cardTitle)
    cardTitle.append(commentTitle)
    cardBody.append(cardSubTitle)
    cardSubTitle.append(userName)
    cardBody.append(cardText)
    cardText.append(commentContent)

    
}
