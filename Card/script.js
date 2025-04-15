document.addEventListener('DOMContentLoaded', function() {
    // Handle card clicks
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Flip card on click
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');

            
        });
        
        // Open character page on double click
        card.addEventListener('dblclick', function() {
            const character = this.getAttribute('data-character');
            openCharacterPage(character);
        });
    });
    
    // Handle video background fallback
    const videoBg = document.getElementById('video-background');
    videoBg.addEventListener('error', function() {
        this.style.display = 'none';
        document.body.style.background = 'url("assets/ninja-background.jpg") no-repeat center center fixed';
        document.body.style.backgroundSize = 'cover';
    });
});

function openCharacterPage(character) {
    // In a real implementation, this would redirect to the character's page
    console.log(`Opening ${character}'s page...`);
    // window.location.href = `characters/${character}.html`;
    
    // For demo purposes:
    alert(`Would normally redirect to ${character}'s profile page`);
}

let naruto = document.querySelector(".naruto");
let itachi = document.querySelector(".itachi");
let kakashi = document.querySelector(".kakashi");
let madara = document.querySelector(".madara");
let sasuke = document.querySelector(".sasuke");
let jiraya  = document.querySelector(".jiraya");

function clickHandler1(){
    window.location.href = "../Profiles/naruto/index.html";  
}

function clickHandler2(){
    window.location.href = "../Profiles/itachi/itachi.html";
}

function clickHandler3(){
    window.location.href = "../Profiles/kakashi/index.html";
}
function clickHandler4(){
    window.location.href = "../Profiles/madara/index.html";
}
function clickHandler5(){
    window.location.href = "../Profiles/sasuke/index.html";
}
function clickHandler6(){
    window.location.href = "../Profiles/jiraya/index.html";
}

naruto.addEventListener("click", clickHandler1);
itachi.addEventListener("click", clickHandler2);
kakashi.addEventListener("click", clickHandler3);
madara.addEventListener("click", clickHandler4);
sasuke.addEventListener("click", clickHandler5);
jiraya.addEventListener("click", clickHandler6);