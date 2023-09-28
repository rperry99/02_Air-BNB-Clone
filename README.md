# FCC React Guided Project 2 - Air BNB Clone

<!-- <p align="center">
    <img src="screenshot.png">
</p> -->

## Some things to Concider

- This page was created using `npm create vite@latest`.
- Added images to the `public` folder. I am not entirely sure if this is the correct approach, but it was the only way I could get the images to load using props.
- This project was made to be displayed well at ~550px width for your screen. So this is **not** responsive.
  - The goal of this project was exclusively to learn how to use props, as well as creating components from an array of data. This was not a responsive design project.

## Difficulties encountered

- Images are something I am struggling with displaying. I don't know if this is a problem with Vite, or if this is me not doing something right.
- Having the images in `src/assets` makes it so the images do not load, even if I am calling them within App.jsx like `img="./assets/card1.png"`.
- I tried moving the images to the public folder. This worked locally in the dev environemnt, but not in the [live demo over here](https://rperry99.github.io/02_Air-BNB-Clone/).
- So far, throughout [all of the React projects I am doing for the course](https://github.com/rperry99/FreeCodeCamp-React), the only way I have been able to get images to work is to import them and then call them with `{imageName}`. But this approach I do not think works when it comes to props.

## New things I learned from this.

- Props
- Creating components from an array of data.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
