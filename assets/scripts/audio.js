// starts the song theme
function play(){
    try{
        const audio = document.getElementById("song");
        audio.play();
    }catch(err){
        const loserAudio = document.getElementById("loserSong");
        loserAudio.play();
        audio.play();
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    play();
});