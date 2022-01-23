//封装动画函数到js文件里
//简单动画函数封装obj目标对象 target 目标位置
function animate(obj,target,callback){
    //给不同的元素指定不同的定时器
    //开启太多的定时器会使元素越来越快 解决方案：先清除之前的定时器 只保留当前一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(window.pageYOffset == target){
            //到达位置停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        //固定步长匀速运动
        //obj.style.left = obj.offsetLeft + 1 + 'px'
        //逐渐减速
        //obj.style.left = obj.offsetLeft + step + 'px'
        window.scroll(0, window.pageYOffset + step);
    }, 15);
}