# federico-fruzzetti-ph




![Invoice app cover](https://user-images.githubusercontent.com/75173681/127357360-77ccb933-0ae3-49d8-8f1b-34731e55ce0b.png)

## Table of contents

- [Overview](#overview)
  - [Intro](#intro)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Features](#features)
  - [Useful resources](#useful-resources)

## Overview

👋 Hi, I built this project for a Photographer Client, the design it's very simple and minimal like he requested. The website it's composed of Html, SCSS, Javascript and two external libraries for the carousel and lightbox gallery. My main focus for this project was optimization for images and speed of load, which I achieved with lazy loadings and srcset tags to serve the right image for the right device.
 

### Intro




![Invoice app design]()


### Links

- [LIVE PREVIEW]() to check my solution.


## My process

### Built with
- Html
- SCSS
- Javascipt

 

### Features

- Lazy loading of images it's implemented with Intersection Observer Api. I chose this approach instead of the loading="lazy"  tag because I preferred to have more control over when elements enter or exit on the viewport.

- Every image tag has a srcset element with 3 different options to serve the right size image for the right device. This feature combined with lazy loading, reduces page weight, allowing for a quicker page load time and conserves bandwidth by delivering content to users only if it's requested.

- On the project page "Raccoglievo le more" the total data transferred for images is 14.3 mb for desktop and only 
991 kb for mobile thanks to srcset attribute. 

- Images are served by a CDN.

- Even if there is no 100% protection against image download, to prevent it I created a custom right-click context menu showing the images copyright and a call to action to contact the owner by the contact page.

- The navbar appears and disappears following the scrolling direction of the page, in this way  when the user is scrolling down, the page looks cleaner and increases the attention on the images.

- The carousel in the landing page is handled by Splide.js a lightweight libraries with no dependencies.





