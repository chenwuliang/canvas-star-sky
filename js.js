/**
 * Created by llissery on 2016/3/13.
 */

var background = document.getElementById("bgCanvas"),
    bgCtx = background.getContext("2d"),
    width = window.innerWidth,
    height = window.innerHeight,
    //随机点
    points = [],
    displacement = 140,
    power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2)))),
    //实体
    entities = [],
    i, j;

//创建随机点
for (i = 1; i < power; i *= 2) {
    for (j = (power / i) / 2; j < power; j += power / i) {
        points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2) +
            Math.floor(Math.random() * -displacement + displacement);
    }
    displacement *= 0.6;
}

//星星构造函数
function Star(options) {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.1;
    this.x = options.x;
    this.y = options.y;
}

Star.prototype.reset = function() {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.1;
    this.x = width;
    this.y = Math.random() * height;
};

Star.prototype.update = function() {
    this.x -= this.speed;
    if (this.x < 0) {
        this.reset();
    } else {
        bgCtx.fillRect(this.x, this.y, this.size, this.size);
    }
};


//设置bgCtx宽高
bgCtx.width = background.width = width;
bgCtx.height = background.height = height;

// 填充背景色
bgCtx.fillStyle = '#001F4F';
bgCtx.fillRect(0, 0, width, height);


//初始化星星
for (i = 0; i < height; i++) {
    entities.push(new Star({
        x: Math.random() * width,
        y: Math.random() * height
    }));
}

//背景动画
function animate() {
    bgCtx.fillStyle = '#001F4F';
    bgCtx.fillRect(0, 0, width, height);
    bgCtx.fillStyle = '#ffffff';
    bgCtx.strokeStyle = '#ffffff';

    var entLen = entities.length;

    while (entLen--) {
        entities[entLen].update();
    }

    requestAnimationFrame(animate);
}
animate();
