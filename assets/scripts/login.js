// change the login image after 4s
function changeLoginImage(index){
    let path1 = "assets/img/cigarrete.png";
    let path2 = "assets/img/main.png";
    let image = document.getElementById("imageLogin");
    
    if(index == 1){
        image.src = path1;
        image.style.opacity = 0.9;
        index++;
    }else{
        image.src = path2;
        image.style.opacity = 1;
        index--;
    }

    setTimeout(()=>{
        changeLoginImage(index)
    }, 3400)
}