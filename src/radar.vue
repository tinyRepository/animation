<template>
  <div class="radar">
    <div class="target target-1"></div>
    <div class="target target-2"></div>
    <div class="target target-3 big-dot"></div>
    <div class="target target-4"></div>
    <div class="target target-5 big-dot"></div>
    <div class="target target-6"></div>
    <div class="target target-7"></div>
    <div class="target target-8 big-dot"></div>
    <div class="target target-9"></div>
    <div class="target target-10 big-dot"></div>
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
    <div class="title"></div>
    <img src="./assets/arrow.svg" class="arrow">
  </div>
</template>

<style lang="scss">
* { box-sizing: border-box; }

body {
    background: #fff;
    display: flex;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
}

.radar {
    position: relative;
    width: 200px;
    height: 200px;
    margin: auto;
    overflow: hidden;
    z-index: 500;
    border-radius: 10em 10em 10em 10em;
    background: #fff;
    // animation: hideEnd 1s 12s forwards;
}

.arrow {
    position: absolute;
    top: 10px;
    left: 10px;
    border-right: 1px solid #6DC0F7;
    transform-origin: right bottom;
    animation-delay: 0s;
    animation-timing-function: linear;
    animation-duration: 4s;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-name: arrower;
    opacity: 0.6;
}

.target {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 2em 2em 2em 2em;
    background-color: #7FCAFC;
    box-shadow: 0 0 5px white;
    transform-origin: 50% 50%;
    opacity: 0;
    animation-timing-function: ease-in;
    animation-duration: 4s;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-name: targetper;
}

.big-dot {
    width: 9px;
    height: 9px;
}

.target {

    &-1 {
        bottom: 40px;
        right: 87px;
        animation-delay: 1.6s;
    }

    &-2 {
        bottom: 86px;
        left: 35px;
        animation-delay: 2.6s;
    }

    &-3 {
        bottom: 67px;
        left: 62px;
        animation-delay: 2.3s;
    }

    &-4 {
        top: 40px;
        right: 50px;
        animation-delay: 0.2s;
    }

    &-5 {
        top: 26px;
        right: 91px;
        animation-name: firsttarget;
    }

    &-6 {
        top: 118px;
        right: 41px;
        animation-delay: 1s;
    }

    &-7 {
        top: 57px;
        right: 137px;
        animation-delay: 3.2s;
    }

    &-8 {
        top: 79px;
        right: 67px;
        animation-delay: 0.5s;
    }

    &-9 {
        top: 125px;
        right: 74px;
        animation-delay: 1.3s;
    }

    &-10 {
        top: 94px;
        right: 124px;
        animation-delay: 2.8s;
    }
}

@keyframes arrower {
    from { 
        transform: rotate(0deg); 
    }
    to   { 
        transform: rotate(360deg); 
    }
}

@keyframes firsttarget {
    0%   { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes targetper {
    0%   { opacity: 0; }
    20%  { opacity: 1; }
    70%  { opacity: 0; }
    100% { opacity: 0; }
}


.circle {

    &-1 {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: solid 1px rgba(127, 202, 252, 0.2);
        position: absolute;
        display: block;
        top: 10px;
        left: 10px;
    }

    &-2 {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: solid 1px rgba(127, 202, 252, 0.3);
        position: absolute;
        display: block;
        top: 20px;
        left: 20px;
    }

    &-3 {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border: solid 1px rgba(127, 202, 252, 0.4);
        position: absolute;
        display: block;
        top: 30px;
        left: 30px;
    }

    &-4 {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: solid 1px rgba(127, 202, 252, 0.5);
        position: absolute;
        display: block;
        top: 40px;
        left: 40px;
    }
}

.line {

    &-1 {
        z-index: 2;
        width: 1px;
        height: 200px;
        position: absolute;
        top: 0%;
        background: rgba(127, 202, 252, 0.9);
        transform: translate(100px,0px);
    }

    &-2 {
        z-index: 2;
        width: 1px;
        height: 200px;
        position: absolute;
        top: 0%;
        background: rgba(127, 202, 252, 0.9);
        transform: translate(100px, 0px) rotate(90deg);
    }
}

.title {
    font-size: 14px;
    font-family: Arial;
    color: #666;
    font-weight: 700;
    z-index: 3;
    position: absolute;
    left: 68px;
    top: 92px;
    animation: pulse 2s linear infinite;

    &:after {
        position: relative;
        content: 'Analysing';
        animation: title  alternate 4s linear infinite;
    }
}

@keyframes pulse {
    0%   {opacity: 0.9;}
    33%  {opacity: 0.7;}
    66%  {opacity: 0.5;}
    100% {opacity: 0.3;}
}

@keyframes title {
    0%   {content: 'Analysing';}
    33%  {content: 'Analysing.';}
    66%  {content: 'Analysing..';}
    100% {content: 'Analysing...';}
}

@keyframes hideEnd {
    50%  {opacity: 1;}
    100% {opacity: 0;}
}

</style>
