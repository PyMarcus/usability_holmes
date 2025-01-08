// starts the song theme
function play(){
    const audio = document.getElementById("song");
    audio.play();
}

document.addEventListener("DOMContentLoaded", ()=>{
    play();
});