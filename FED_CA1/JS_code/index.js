            // Author: Swaathi Lakshmanan
            // Class: DISM/FT/1A/05
            // CA1
            // Theme: My Career Prospect
            // Page:About me
            // Date:2/6/2022
            // File name: index.js

document.getElementById('newsletter').addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'none';
})