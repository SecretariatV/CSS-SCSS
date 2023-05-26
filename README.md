# CSS-SCSS
This repo is a project to design and implement various animations including 3D and slider using CSS and SCSS.
All animations were inspired and implemented by CodePen.
- [CSS-SCSS](#css-scss)
  - [Table of contents](#table-of-contents)
  - [3D Card](#3d-card)

## Table of contents[](#table-of-contents)
- 3D Card

## 3D Card[](#3d-card)
<img align="center" src="/screenshot/3D_Card/screenshot.jpg" alt="3D Card" style="width:100%;height:100%"/>
This project is a project that implements a 3D card using CSS.
```
.card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}
```