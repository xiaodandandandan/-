// 滑动下拉40px出现回顶部标签  上移消失
//声明了DTD(头部加了<!DOCTYPE html>) 使用document.documentElement.scrollTop
//未声明了DTD 使用document.body.scrollTop
//document.body.scrollTop > 40 || document.documentElement.scrollTop >40
//新方法 window.pageYOffset  window.pageXOffset 
function scrollFunction(){
    if(window.pageYOffset > 40){
        document.getElementById("go-top").style.display = "block";
    }else{
        document.getElementById("go-top").style.display = "none";
    }
}
//绑定滑动事件
window.addEventListener('scroll',scrollFunction)

//简单的实现点击切换图片 重写
var banner = document.querySelector(".banner");
console.log(banner.children);
var pick = document.querySelector(".banner-container .pick");
var l_btn = document.querySelector('.left-btn');
var r_btn = document.querySelector('.right-btn');

var len = banner.children.length;
//根据图片的多少往ul里添加小圆点
for(let i = 0;i < len;i++){
    var li = document.createElement('li');
    li.className = "pick-item";
    pick.appendChild(li);
}
//初始
pick.children[0].className = 'pick-item active';
//banner轮播 更改opacity属性
//设置flag判断是否轮播到最后一张图
var flag=0;
function bannerImage(){
    if(flag == len - 1){
        //先清除最后一张样式
        banner.children[flag].className = 'banner-image';
        pick.children[flag].className = 'pick-item';
        //增加到最大后flag清零 从头开始循环
        flag = 0;
        banner.children[flag].className = 'banner-image on';
        pick.children[flag].className = 'pick-item active';
    }else{
        //设置前一张图片清除样式
        banner.children[flag].className = 'banner-image';
        pick.children[flag].className = 'pick-item';
        flag++;
        //设置当前图片样式
        banner.children[flag].className = 'banner-image on';
        pick.children[flag].className = 'pick-item active';
    }
}

//添加定时器设置循环
var timer = setInterval(bannerImage,5000);

//小圆点选择图片
for(let i = 0;i < len;i++){
    pick.children[i].addEventListener('click',function(){
        //清除样式
        for(let i = 0;i < len;i++){
            pick.children[i].className = 'pick-item';
            banner.children[i].className = 'banner-image';
        }
        //选中项设置样式
        pick.children[i].className = 'pick-item active';
        banner.children[i].className = 'banner-image on';
    })
}

//左按钮点击显示前一张图片
l_btn.addEventListener('click',function(){
    //判断当前显示第几张图片
    for(let i = 0;i < len;i++){
        if(banner.children[i].className == 'banner-image on'){
            flag = i;
            break;
        }
    }
    //如果是第一张则点击后显示最后一张
    if(flag == 0){
        banner.children[flag].className = 'banner-image';
        pick.children[flag].className = 'pick-item';
        flag = len - 1;
        //设置当前图片样式
        banner.children[flag].className = 'banner-image on';
        pick.children[flag].className = 'pick-item active';
    }else{//如果不是第一张则点击后显示前一张
        banner.children[flag].className = 'banner-image';
        pick.children[flag].className = 'pick-item';
        //设置当前图片样式
        banner.children[flag - 1].className = 'banner-image on';
        pick.children[flag - 1].className = 'pick-item active';
    } 
})

//右按钮点击显示后一张图片
r_btn.addEventListener('click',function(){
    //判断当前显示第几张图片
    for(let i = 0;i < len;i++){
        if(banner.children[i].className == 'banner-image on'){
            flag = i;
            break;
        }
    }
     //如果是最后一张则点击后显示第一张
     if(flag == len - 1){
        banner.children[flag].className = 'banner-image';
        pick.children[flag].className = 'pick-item';
        flag = 0;
        //设置当前图片样式
        banner.children[flag].className = 'banner-image on';
        pick.children[flag].className = 'pick-item active';
    }else{//如果不是最后一张则点击后显示后一张
        banner.children[flag].className = 'banner-image';
        pick.children[flag].className = 'pick-item';
        //设置当前图片样式
        banner.children[flag + 1].className = 'banner-image on';
        pick.children[flag + 1].className = 'pick-item active';
    } 
})
