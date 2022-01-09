// 滑动下拉40px出现回顶部标签  上移消失
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

//简单的实现点击切换图片
var aBannerimage = document.querySelectorAll(".banner-image");
//console.log(aBannerimage);
var aPick = document.querySelectorAll(".banner-container .pick-item");
//console.log(aPick);
var i=0;
function pickImage(x){
    i=x.attributes[0].nodeValue;
    //console.log(i);
    if(i==1){
        aBannerimage[i].className = 'banner-image on';
        aPick[i].className = 'pick-item active';
        aBannerimage[i-1].className = 'banner-image';
        aPick[i-1].className = 'pick-item';
    }else{
        aBannerimage[i].className = 'banner-image on';
        aPick[i].className = 'pick-item active';
        aBannerimage[1].className = 'banner-image';
        aPick[1].className = 'pick-item';
    }
}