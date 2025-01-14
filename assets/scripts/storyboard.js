function setDisplay(element, displayValue) {
    if (element !== null) {
        element.style.display = displayValue;
    }
}

function settings() {
    const message = document.getElementById("storyboard-orientation-message");
    const intro = document.getElementById("storyboard-message-intro");
    const btnStory = document.getElementById("btnStory");
    const btnStory2 = document.getElementById("btnStory2");
    const btnStory4 = document.getElementById("btnStory4");
    const btnStory5 = document.getElementById("btnStory5");
    const imgs = document.getElementsByClassName("img");

    function setMultipleDisplay(elements, displayValue) {
        for (let element of elements) {
            setDisplay(element, displayValue);
        }
    }

    if (window.innerWidth < window.innerHeight) {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock("landscape").catch(
                (error) => {
                    console.log("Falha ao definir modo paisagem: ", error);
                }
            );
        }

        setDisplay(message, "block");
        setDisplay(intro, "none");
        setMultipleDisplay(imgs, "none");
        setDisplay(btnStory, "none");
        setDisplay(btnStory2, "none");
        setDisplay(btnStory4, "none");
        setDisplay(btnStory5, "none");

    } else {
        setDisplay(message, "none");
        setDisplay(intro, "block");
        setMultipleDisplay(imgs, "block");
        setDisplay(btnStory, "block");
        setDisplay(btnStory2, "block");
        setDisplay(btnStory4, "block");
        setDisplay(btnStory5, "block");
    }
}


function keepHorizontalOrientation(){
    settings();
}

document.addEventListener("DOMContentLoaded", ()=>{
   keepHorizontalOrientation();
});

window.addEventListener("resize", keepHorizontalOrientation);
window.addEventListener("orientationchange", keepHorizontalOrientation);

