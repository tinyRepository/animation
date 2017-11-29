<template>

    <div class="counter-container">
        <div class="counter-wrap">
            <!-- svg images -->
            <div class="coin">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="22" xmlns:xlink="http://www.w3.org/1999/xlink" class="coin__svg">
                    <use fill="url(#b1)" fill-opacity=".5" xlink:href="#a1" transform="rotate(-90 13.32 6.25)"/>
                    <use fill="url(#d1)" fill-opacity=".5" xlink:href="#c1" transform="rotate(-90 7.64 7.64)"/>
                    <g transform="translate(-1195 1284)">
                        <use xlink:href="#e1" transform="rotate(-90 -23.39 -1239.61)" class="main-color"/>
                        <mask id="f1">
                            <path fill="#fff" d="M1215.21-1262v-22h22v22z"/>
                            <use xlink:href="#e1" transform="rotate(-90 -23.39 -1239.61)"/>
                        </mask>
                        <use fill="#FFF" xlink:href="#g1" transform="rotate(-90 -23.39 -1239.61)" mask="url(#f1)"/>
                    </g>
                    <g transform="translate(-1195 1284)">
                        <use xlink:href="#h1" transform="rotate(-90 -23.42 -1243.87)" class="second-color"/>
                        <mask id="i1">
                            <path fill="#fff" d="M1219.45-1266.29v-14h14v14z"/>
                            <use xlink:href="#h1" transform="rotate(-90 -23.42 -1243.87)"/>
                        </mask>
                        <use fill="#FFF" fill-opacity=".6" xlink:href="#j1" transform="rotate(-90 -23.42 -1243.87)" mask="url(#i1)"/>
                    </g>
                    <defs>
                        <linearGradient id="b1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -33.93 17.14 0 0 33.93)">
                            <stop offset="0" class="coin-tail"/>
                            <stop offset="1" class="coin-tail" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="d1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -41 8.57 0 0 41)">
                            <stop offset="0" class="coin-tail"/>
                            <stop offset="1" class="coin-tail" stop-opacity="0"/>
                        </linearGradient>
                        <path id="a1" d="M0 0h17.143v25.36c0 4.733-3.838 8.57-8.572 8.57C3.84 33.93 0 30.094 0 25.36V0z"/>
                        <path id="c1" d="M0 0h8.57v36.714C8.57 39.08 6.654 41 4.287 41S0 39.08 0 36.714V0z"/>
                        <path id="e1" d="M20 9.897c0 5.465-4.477 9.896-10 9.896S0 15.363 0 9.897C0 4.43 4.477 0 10 0s10 4.43 10 9.897z"/>
                        <path id="g1" d="M19 9.897c0 4.903-4.02 8.896-9 8.896v2c6.065 0 11-4.87 11-10.896h-2zm-9 8.896c-4.98 0-9-3.993-9-8.896h-2c0 6.027 4.935 10.896 11 10.896v-2zM1 9.897C1 4.993 5.02 1 10 1v-2C3.935-1-1 3.87-1 9.897h2zM10 1c4.98 0 9 3.993 9 8.897h2C21 3.87 16.065-1 10-1v2z"/>
                        <path id="h1" d="M11.43 5.655c0 3.123-2.56 5.655-5.716 5.655S0 8.778 0 5.655 2.558 0 5.714 0C8.87 0 11.43 2.532 11.43 5.655z"/>
                        <path id="j1" d="M10.43 5.655c0 2.56-2.102 4.655-4.716 4.655v2c3.7 0 6.715-2.97 6.715-6.655h-2zM5.713 10.31C3.1 10.31 1 8.216 1 5.655h-2c0 3.686 3.016 6.655 6.714 6.655v-2zM1 5.655C1 3.095 3.1 1 5.714 1v-2C2.016-1-1 1.97-1 5.655h2zM5.714 1c2.614 0 4.715 2.094 4.715 4.655h2C12.43 1.97 9.412-1 5.713-1v2z"/>
                    </defs>
                </svg>
            </div>

            <div class="counter">
                <div class="counter__number"></div>
                <div class="counter__border"></div>

                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" xmlns:xlink="http://www.w3.org/1999/xlink" class="counter-svg">
                    <use xlink:href="#a" class="inner-fill"/>
                    <g transform="translate(-1267 1306)">
                        <mask id="c">
                        <path fill="#fff" d="M1271-1302h52v52h-52z"/>
                        <use xlink:href="#b" transform="translate(1272 -1301)"/>
                        </mask>
                        <use fill="#FFF" fill-opacity=".2" xlink:href="#d" transform="translate(1272 -1301)" mask="url(#c)"/>
                    </g>
                    <defs>
                        <path id="a" d="M60 30C60 46.57 46.57 60 30 60 13.43 60 0 46.57 0 30 0 13.43 13.43 0 30 0 46.57 0 60 13.43 60 30z"/>
                        <path id="b" d="M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25z"/>
                        <path id="d" d="M49 25c0 13.255-10.745 24-24 24v2c14.36 0 26-11.64 26-26h-2zM25 49C11.745 49 1 38.255 1 25h-2c0 14.36 11.64 26 26 26v-2zM1 25C1 11.745 11.745 1 25 1v-2C10.64-1-1 10.64-1 25h2zM25 1c13.255 0 24 10.745 24 24h2C51 10.64 39.36-1 25-1v2z"/>
                    </defs>
                </svg>
            <!-- /svg images -->
            </div>

        </div>

        <div class="counter__text">
            <div class="counter__title element-animation">Selling Ripple to Bittrex</div>
            <div class="counter__course">Expected Profit: 1,5025600 BTC</div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    $time: 3;
    $circle-size: 60px;
    $inner-circle: #7FCAFC;
    $circle-color: #58BAFC;

    $mainFont: Arial, Helvetica, sans-serif;
    $titleColor: #0b3b5b;
    $descriptionColor: #717e9e;

    $coinSpeed: 1;
    $firstNum: 3;

    // Markup elements
    .counter-container {
        max-width: 500px;
        margin: auto;
        border: 1px solid;
        padding: 100px 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .counter-wrap {
        max-width: 500px;
        margin: auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inner-fill {
        fill: $inner-circle;
    }

    .counter {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        animation: zoomOut $coinSpeed*0.6s $time+s forwards;

        &__number {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -10px;
            margin-left: -10px;

            &::after {
                position: absolute;
                content: '#{$firstNum - 3}';
                font-family: $mainFont;
                font-size: 16px;
                color: #fff;
                z-index: 10;
                width: 20px;
                height: 20px;
                animation: number $time+s;
            }
        }

        &__border {
            position: absolute;
            border-radius: 50%;
            z-index: 3;
            width: $circle-size;
            height: $circle-size;
            overflow: hidden;
            left: 0;

            &::after {
                content: '';
                border: 1px solid rgba(255, 255, 255, 0.2);
                position: absolute;
                border-radius: 50%;
                z-index: 3;
                width: $circle-size - 10;
                height: $circle-size - 10;
                left: 4px;
                top: 4px;
                background: transparent;
            }
            
            &::before {
                content: '';
                display: block;
                position: absolute;
                background: $circle-color;
                width: $circle-size;
                height: $circle-size;
                border-radius: 50%;
                animation: fill $time+s;
                left: 0;
                top: 0;
            }
        }

        &__text {
            margin-top: 25px;
            overflow: hidden;
        }

        &__title {
            color: $titleColor;
            font-family: $mainFont;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 5px;
            animation: animationFrames linear $time + 1s;
            animation-iteration-count: 1;
            transform-origin: 50% 50%;
            transform: translate3d(100%, 0, 0);
            animation-fill-mode: forwards;
        }

        &__course {
            color: $descriptionColor;
            font-family: $mainFont;
            font-size: 12px;
            font-style: normal;
            word-wrap: break-word;
            font-weight: 500;
            transform: translate3d(0, 0%, 0);
            animation: slideDown $coinSpeed*0.3s $time + 0.3s forwards;
        }
    }

    .coin {
        &__svg {
            animation: coin $coinSpeed+s $time, fadeOut $coinSpeed+s $time+s 1 forwards;
            animation-timing-function: cubic-bezier(0.6, 0.1, 0.59, 0.93);
            transform: translate3d(100%,0,0);

            .coin-tail {
                stop-color: $inner-circle;
            }

            .main-color {
                fill: $circle-color;
            }

            .second-color {
                fill: $inner-circle;
            }
        }
    }

// Animation styles
@keyframes number {
    0%   {content: '#{$firstNum}';}
    32%  {content: '#{$firstNum}';}
    33%  {content: '#{$firstNum - 1}';}
    65%  {content: '#{$firstNum - 1}';}
    66%  {content: '#{$firstNum - 2}';}
    98%  {content: '#{$firstNum - 2}';}
    99%  {content: '#{$firstNum - 3}';}
    100% {content: '#{$firstNum - 3}';}
}

    @keyframes fill {
    0%   {left: 0%;}
    32%  {left: 0%;}
    34%  {left: 33%;}
    36%  {left: 24%;}
    38%  {left: 30%;}
    64%  {left: 30%;}
    66%  {left: 63%;}
    68%  {left: 54%;}
    70%  {left: 60%;}
    93%  {left: 60%;}
    95%  {left: 93%;}
    97%  {left: 84%;}
    99%  {left: 90%;}
    100% {left: 100%;}
}

@keyframes coin {
    from {
        transform: translate3d(100%,0,0);
    }

    to {
        transform: translate3d(400%,0,0);
    }
}

@keyframes slideDown {
    0%{
        transform: translate3d(0, 0%, 0);
    }

    100% {
        transform: translate3d(0, 100%, 0);
    }
}

@keyframes zoomOut {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes animationFrames {
    0% {
        transform:  translate(0%,0px);
    }
    85% {
        transform:  translate(0%,0px);
        opacity: 1;
    }
    90% {
        transform:  translate(100%,0px);
        opacity: 0;
    }
    100% {
        opacity: 0;
        transform:  translate(100%,0px);
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

</style>