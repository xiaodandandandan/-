function scrollFunction(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop >40){
        document.getElementById("go-top").style.display = "block";
    }else{
        document.getElementById("go-top").style.display = "none";
    }
}

window.onscroll = function(){
    scrollFunction();
}