function showScreen(number){

let screens=document.querySelectorAll(".screen");

screens.forEach(function(screen){

screen.classList.remove("active");

});

document.getElementById("screen"+number).classList.add("active");
}
window.onload = function(){
    const music =
    document.getElementById("bgMusic");
    music.onplay();
};