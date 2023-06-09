# CSS-SCSS
This repo is a project to design and implement various animations including 3D and slider using CSS and SCSS.
All animations were inspired and implemented by CodePen.
- [CSS-SCSS](#css-scss)
  - [Table of contents](#table-of-contents)
  - [3D Card](#3d-card)
    - [CSS](#css)
  - [3D Carousel](#3d-carousel)
    - [Start Effect](#start-effect)
    - [Image 3D Effect](#image-3d-effect)
    - [Mouse Event Effect](#mouse-event-effect)
  - [3D Card Hover](#3d-card-hover)
    - [Caption Animation](#caption-animation)
    - [Image Effect](#image-effect)
  - [3D Card Effect](#3d-card-effect)
    - [Add mouse event listener](#add-mouse-event-listener)
  - [3D Card Effect V2](#3d-card-effect-v2)
    - [Mouse Event](#mouse-event)
  - [3D Image Hover](#3d-image-hover)
    - [Animation](#animation)
  - [3D Thumb Image Effect](#3d-thumb-image-effect)
    - [Book Effect](#book-effect)
    - [Shadow Effect](#shadow-effect)
  - [Image Caption v1](#image-caption-v1)
    - [Caption Animation](#caption-animation-1)
  - [Image Caption v2](#image-caption-v2)
    - [Caption Animation](#caption-animation-2)
  - [Image Caption v2](#image-caption-v2-1)
  - [Border Effect](#border-effect)
    - [Border Animation](#border-animation)
    - [Image Effect](#image-effect-1)

## Table of contents[](#table-of-contents)
- 3D Card

## 3D Card[](#3d-card)
<img align="center" src="/screenshot/3D_Card/screenshot.jpg" alt="3D Card" style="width:100%;height:100%"/>
This project is a project that implements a 3D card using CSS.

### CSS
```
.card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}
```

## 3D Carousel[](#3d-carousel)
<img align="center" src="/screenshot/3D_Carousel/Carousel.jpg" alt="3D_Carousel" style="width:100%;height:100%"/>
This project is a project that implements the image carousel effect using CSS and JavaScript.

### Start Effect
```
for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = "rotateY(" + i * (360 / imgs.length) + "deg) translateZ(" + radius + "px)";
    imgs[i].style.transition = "transform 1s";
    imgs[i].style.transitionDelay = delayTime || (imgs.length - i) / 4 + "s";
  }
```

### Image 3D Effect
```
img {
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
  box-shadow: 0 0 8px #fff;
  -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
}
```

### Mouse Event Effect
```
document.onpointerdown = function (e) {
  clearInterval(wheel.timer);
  e = e || window.event;
  var sX = e.clientX, sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX, nY = e.clientY;
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
```

## 3D Card Hover[](#3d-card-hover)
<img align="center" src="/screenshot/3D_Card_Hover/Screenshot.jpg" alt="3D Card Hover" style="width:100%;height:100%"/>
This project shows 3D animation using characters.

### Caption Animation
```
figcaption {
  grid-area: 1/1;
  width: calc(100% + 40px);
  font-family: Exoct;
  color: white;
  font-size: min(32px, 5vmin);
  text-align: center;
  place-self: end center;
  transform: perspective(500px) translateY(100%) rotateX(-90deg);
  backface-visibility: hidden;
  transform-origin: top;
  background: #000;
  transition: 0.5s;
}
```

### Image Effect 
```
figure {
  width: 100%;
  aspect-ratio: 1;
  margin: 0 0 60px;
  padding: 5px 20px 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 100%;
  cursor: pointer;
  position: relative;
  filter: drop-shadow(0 0 20px rgb(0 0 0/50%));
}

figure:before {
  background-image: url(https://assets.codepen.io/1480814/necro-back.jpg);
}

figure + figure:before {
  background-image: url(https://assets.codepen.io/1480814/druid-bac.jpg);
}
```

## 3D Card Effect[](#3d-card-effect)
<img align="center" src="/screenshot/3D_Card_Effect/3D_Card_Effect.jpg" alt="3D Card Effect" style="width:100%;height:100%"/>
This project is a project that shows a 3D card using mouse events.

### Add mouse event listener
```
container.addEventListener("mousemove", (e) => {
  let X = (window.innerWidth / 2 - e.pageX) / 30;
  let Y = (window.innerHeight / 2 - e.pageY) / 30;

  card.style.transition = "none";
  card.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`;
});
```

## 3D Card Effect V2[](#3d-card-effect-v2)
<img align="center" src="/screenshot/3D_Card_Effect_V2/Screenshot.jpg" alt="3D Card Effect V2" style="width:100%;height:100%"/>

### Mouse Event
```
window.addEventListener("DOMContentLoaded", (event) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((e) => {
    e.addEventListener("mousemove", (event) => {
      const rect = e.getBoundingClientRect();
      const centerX = (rect.left + rect.right) / 2;
      const centerY = (rect.top + rect.bottom) / 2;
      const posX = event.pageX - centerX;
      const posY = event.pageY - centerY;
      const x = remap(posX, rect.width / 2, angle);
      const y = remap(posY, rect.height / 2, angle);
      e.dataset.rotateX = x;
      e.dataset.rotateY = -y;
    });

    e.addEventListener("mouseout", (event) => {
      e.dataset.rotateX = 0;
      e.dataset.rotateY = 0;
    });
  });

  const update = () => {
    cards.forEach((e) => {
      let currentX = parseFloat(
        e.style.getPropertyValue("--rotateY").slice(0, -1)
      );
      let currentY = parseFloat(
        e.style.getPropertyValue("--rotateX").slice(0, -1)
      );
      if (isNaN(currentX)) currentX = 0;
      if (isNaN(currentY)) currentY = 0;
      const x = lerp(currentX, e.dataset.rotateX, 0.05);
      const y = lerp(currentY, e.dataset.rotateY, 0.05);
      e.style.setProperty("--rotateY", x + "deg");
      e.style.setProperty("--rotateX", y + "deg");
    });
  };
  setInterval(update, 1000 / 60);
});
```

## 3D Image Hover[](#3d-image-hover)
<img align="center" src="/screenshot/3D_Image_Hover/3DImageHover.jpg" alt="3D Image Hover" style="width:100%;height:100%"/>
This project implemented multiple sliders animation using CSS.

### Animation
```
.container:hover img:nth-child(4) {
  transform: translate(160px, -160px);
  opacity: 1;
}

.container:hover img:nth-child(3) {
  transform: translate(120px, -120px);
  opacity: 0.8;
}

.container:hover img:nth-child(2) {
  transform: translate(80px, -80px);
  opacity: 0.6;
}

.container:hover img:nth-child(1) {
  transform: translate(40px, -40px);
  opacity: 0.4;
}
```

## 3D Thumb Image Effect[](#3d-thumb-image-effect)
<img align="center" src="/screenshot/3D_Thumb_Image_Animation/Screenshot.jpg" alt="3D Thumb Effect" style="width:100%;height:100%"/>

### Book Effect
```
.thumb a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 36px;
  background: inherit;
  background-size: cover, cover;
  background-position: bottom;
  transform: rotateX(90deg);
  transform-origin: bottom;
}
```

### Shadow Effect
```
.thumb a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 100px 50px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  opacity: 0.15;
  transform: rotateX(95deg) translateZ(-80px) scale(0.75);
  transform-origin: bottom;
}

.thumb:hover a:before {
  opacity: 1;
  box-shadow: 0 0 25px 25px rgba(0, 0, 0, 0.5);
  transform: rotateX(0) translateZ(-60px) scale(0.85);
}
```

## Image Caption v1[](#image-caption-v1)
<img align="center" src="/screenshot/Image_Caption_v1/Screenshot.jpg" alt="Image Caption v1" style="width:100%;height:100%"/>

### Caption Animation
```
figure.caption::after {
  content: "";
  background: #ffffff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0.75;
  transform: skew(-45deg) scaleX(0);
  transition: 0.3s ease-in-out;
}

figure.caption:hover::after {
  transform: skew(-45deg) scaleX(1);
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

## Image Caption v2[](#image-caption-v2)
<img align="center" src="/screenshot/Image_Caption_v2/Screenshot.jpg" alt="Image Caption v2" style="width:100%;height:100%"/>

### Caption Animation
```
.caption::before,
.caption::after {
  height: 10px;
  width: 0%;
}

.caption::before {
  top: 0;
  left: 0;
}

.caption::after {
  bottom: 0;
  right: 0;
}

.caption:hover::before,
.caption:hover::after {
  width: 100%;
}
```

## Image Caption v2[](#image-caption-v2)
<img align="center" src="/screenshot/Image_Caption_v3/Screenshot.jpg" alt="Image Caption v3" style="width:100%;height:100%"/>


## Border Effect[](#border-effect)
<img align="center" src="/screenshot/Border_Effect/Screenshot.jpg" alt="Border Effect" style="width:40%;height:40%"/>
This project uses Vanilla CSS to apply a floating border effect to image.

### Border Animation
```
@-webkit-keyframes morph {
  0% {
    border-radius: 40% 60% 60% 40%/60% 30% 70% 40%;
  }
  100% {
    border-radius: 40% 60%;
  }
}

@keyframes morph {
  0% {
    border-radius: 40% 60% 60% 40%/60% 30% 70% 40%;
  }
  100% {
    border-radius: 40% 60%;
  }
}

.shape {
  width: 100%;
  height: 100%;
  transition: border-radius 1s ease-out;
  -webkit-animation: morph 8s ease-in-out infinite both alternate;
  animation: morph 8s ease-in-out infinite both alternate;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  position: absolute;
  overflow: hidden;
  z-index: 5;
}
```

### Image Effect
To fix the image, the same effect is applied to the image and the border container.
```
.bd {
  width: 120%;
  height: 120%;
  position: absolute;
  left: -10%;
  top: -10%;
  background: url("img/1.jpg");
  background-size: 100%;
  background-position: center -9%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin 12s linear infinite reverse;
  z-index: 2;
}

@-webkit-keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
```