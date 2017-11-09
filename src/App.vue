<template>
  <div class="radar">
      <div class="target target-1"></div>
      <div class="target target-2"></div>
      <div class="target target-3"></div>
      <div class="target target-4"></div>
      <div class="target target-5"></div>
      <div class="target target-6"></div>
      <div class="target target-7"></div>
      <div class="target target-8"></div>
      <div class="target target-9"></div>
      <div class="target target-10"></div>
      <div class="arrow"></div>
  </div>
</template>


<style lang="scss">
* { box-sizing: border-box; }

body {
  background: #000;
}

.radar {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 40px auto 0;
    overflow: hidden;
    z-index: 500;
    border-radius: 10em 10em 10em 10em;
    background: #fff;
}

.arrow {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100px;
    height: 100px;
    border-right: 2px solid #7FCAFC;
    background: linear-gradient(right bottom, rgba(118, 153, 15, 0.3) 0%, rgba(118, 153, 15, 0) 60%);
    transform-origin: right bottom;
    animation-delay: 0s;
    animation-timing-function: linear;
    animation-duration: 4s;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-name: arrower;
    box-shadow: inset 0px 20px 20px 0px rgba(127, 202, 252, 0.9);
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
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-name: targetper;
}

.target-1 {
    bottom: 40px;
    right: 87px;
    animation-delay: 0.5s;
}

.target-2 {
    bottom: 86px;
    left: 35px;
    animation-delay: 1.5s;
}

.target-3 {
    bottom: 67px;
    left: 62px;
    animation-delay: 1.25s;
}

.target-4 {
    top: 40px;
    right: 50px;
    animation-delay: 3.1s;
}

.target-5 {
    top: 26px;
    right: 91px;
    animation-delay: 3.1s;
}

.target-6 {
    top: 118px;
    right: 41px;
    animation-delay: 3.4s;
}

.target-7 {
    top: 57px;
    right: 137px;
    animation-delay: 1.8s;
}

.target-8 {
    top: 79px;
    right: 67px;
    animation-delay: 3.1s;
}

.target-9 {
    top: 125px;
    right: 74px;
    animation-delay: 3.1s;
}

.target-10 {
    top: 94px;
    right: 124px;
    animation-delay: 1.1s;
}


@keyframes arrower {
  from { 
    transform: rotate(0deg); 
  }
  to   { 
    transform: rotate(360deg); 
  }
}

@keyframes targetper {
  0%   { opacity: 0; }
  35%  { opacity: 0; }
  50%  { opacity: 1; }
  100% { opacity: 0; }
}

</style>
