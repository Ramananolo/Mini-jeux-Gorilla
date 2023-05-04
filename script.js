var personne = document.querySelector(".personne"); 
var obstacle = document.querySelector(".obstacle"); 

// function pour faire sauter le personnage
function sauter(){
    if(personne.classList != "animation"){
        personne.classList.add('animation');
    }
    setTimeout(function(){
        personne.classList.remove('animation');
    },500)
}

//verifier si l'obstacle touche le personnage
var verification = setInterval(function(){
    var personneTop = parseInt(window.getComputedStyle(personne).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if(obstacleLeft<45 && obstacleLeft>10 && personneTop>=130){
        obstacle.style.animation = "none";
        document.getElementById("perdus").style.display="flex";
    }
})