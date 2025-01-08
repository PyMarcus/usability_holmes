const CHANGE_LOGIN_IMAGE_INTERVAL = 3400;
const MIN_OPACITY = 0.9;
const MAX_OPACITY = 1;


// change the login image after 4s
function changeLoginImage(index){
    let path1 = "assets/img/cigarrete.png";
    let path2 = "assets/img/main.png";
    let image = document.getElementById("imageLogin");
    
    if(index == 1){
        image.src = path1;
        image.style.opacity = MIN_OPACITY;
        index++;
    }else{
        image.src = path2;
        image.style.opacity = MAX_OPACITY;
        index--;
    }

    setTimeout(()=>{
        changeLoginImage(index)
    }, CHANGE_LOGIN_IMAGE_INTERVAL)
}