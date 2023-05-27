var radius = 240;
var imgWidth = 120;
var imgHeight = 170;
var autoRotate = true;
var rotateSpeed = -60;

setTimeout(init, 10);

var wheel = document.getElementById("wheel-container");
var img_container = document.getElementById("img-container");
var imgs = img_container.getElementsByTagName("img");

img_container.style.width = imgWidth + "px";
img_container.style.height = imgHeight + "px";

function init(delayTime) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.transform =
      "rotateY(" +
      i * (360 / imgs.length) +
      "deg) translateZ(" +
      radius +
      "px)";
    imgs[i].style.transition = "transform 1s";
    imgs[i].style.transitionDelay = delayTime || (imgs.length - i) / 4 + "s";
  }
}

function applyTransform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
}

function playSpin(flag) {
  img_container.style.animationPlayState = flag ? "running" : "paused";
}

if (autoRotate) {
  console.log(autoRotate);
  var animation = rotateSpeed > 0 ? "spin" : "spinRevert";
  img_container.style.animation = `${animation} ${Math.abs(
    rotateSpeed
  )}s infinite linear`;
}

var desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

document.onpointerdown = function (e) {
  clearInterval(wheel.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTransform(wheel);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    wheel.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTransform(wheel);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(wheel.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
