/**
 * Created by llissery on 2016/3/13.
 */

var background = document.getElementById("bgCanvas"),
    bgCtx = background.getContext("2d"),
    width = window.innerWidth,
    height = window.innerHeight;

//设置bgCtx宽高
bgCtx.width = background.width = width;
bgCtx.height = background.height = height;

// 填充背景色
bgCtx.fillStyle = '#001F4F';
bgCtx.fillRect(0, 0, width, height);
