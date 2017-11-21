<template>

    <div class="counter-container">
        <div class="counter-wrap">

            <div class="coin">
                <img src="./assets/coin.svg" class="coin__svg">
            </div>

            <div class="counter">
                <div class="counter__number"></div>
                <div class="counter__border"></div>
                <img src="./assets/counter.svg" class="counter__svg">
            </div>

        </div>
        
        <div class="counter__text">
            <div class="counter__title element-animation">Buying Ripple at Coinone</div>
            <div class="counter__course">Expected Profit: 1,5025600 BTC</div>
        </div>

    </div>

</template>


<style lang="scss" scoped>
    $time: 3;
    $circle-size: 60px;
    $circle-color: #58BAFC;

    // Markup elements
    .counter-container {
        max-width: 500px;
        margin: auto;
        border: 1px solid;
        padding: 100px 50px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: -moz-box;
        display: flex;
        -ms-flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
           -moz-box-orient: vertical;
           -moz-box-direction: normal;
                flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
           -moz-box-align: center;
                align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
           -moz-box-pack: center;
                justify-content: center;
    }

    .counter-wrap {
        max-width: 500px;
        margin-bottom: 20px;
        margin: auto;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: -moz-box;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
           -moz-box-orient: horizontal;
           -moz-box-direction: normal;
                flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
           -moz-box-align: center;
                align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
           -moz-box-pack: center;
                justify-content: center;
    }

    .counter {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: -moz-box;
        display: flex;
        -webkit-animation: zoomIn 0.6s;
           -moz-animation: zoomIn 0.6s;
             -o-animation: zoomIn 0.6s;
                animation: zoomIn 0.6s;

        &__number {
            position: absolute;
            left: 50%;
            margin-left: -5px;
            top: 50%;
            margin-top: -10px;

            &::after {
                position: absolute;
                content: '3';
                font-family: Helvetica, Arial, sans-serif;
                font-size: 16px;
                color: #fff;
                z-index: 10;
                -webkit-animation: number $time+s;
                   -moz-animation: number $time+s;
                     -o-animation: number $time+s;
                        animation: number $time+s;
            }
        }

        &__border {
            position: absolute;
            -webkit-border-radius: 50%;
               -moz-border-radius: 50%;
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
                -webkit-border-radius: 50%;
                   -moz-border-radius: 50%;
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
                -webkit-border-radius: 50%;
                   -moz-border-radius: 50%;
                        border-radius: 50%;
                -webkit-animation: fill $time+s;
                   -moz-animation: fill $time+s;
                     -o-animation: fill $time+s;
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
            color: rgb(11, 59, 91);
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 5px;
            animation: animationFrames linear 4s;
            animation-iteration-count: 1;
            transform-origin: 50% 50%;
            -webkit-animation: animationFrames linear 4s;
            -webkit-animation-iteration-count: 1;
            -webkit-transform-origin: 50% 50%;
            -moz-animation: animationFrames linear 4s;
            -moz-animation-iteration-count: 1;
            -moz-transform-origin: 50% 50%;
            -o-animation: animationFrames linear 4s;
            -o-animation-iteration-count: 1;
            -o-transform-origin: 50% 50%;
            -ms-animation: animationFrames linear 4s;
            -ms-animation-iteration-count: 1;
            -ms-transform-origin: 50% 50%;
            -webkit-transform: translate3d(100%, 0, 0);
               -moz-transform: translate3d(100%, 0, 0);
                    transform: translate3d(100%, 0, 0);
            -webkit-animation-fill-mode: forwards;
               -moz-animation-fill-mode: forwards;
                 -o-animation-fill-mode: forwards;
                    animation-fill-mode: forwards;
        }

        &__course {
            color: rgb(113, 126, 158);
            font-family: Arial;
            font-size: 12px;
            font-style: normal;
            word-wrap: break-word;
            font-weight: 500;
            -webkit-transform: translate3d(0, 0%, 0);
               -moz-transform: translate3d(0, 0%, 0);
                    transform: translate3d(0, 0%, 0);
            -webkit-animation: slideUp 0.3s;
               -moz-animation: slideUp 0.3s;
                 -o-animation: slideUp 0.3s;
                    animation: slideUp 0.3s;
        }
    }

    .coin {
        &__svg {
            -webkit-animation: coin 1s;
               -moz-animation: coin 1s;
                 -o-animation: coin 1s;
                    animation: coin 1s;
            -webkit-animation-iteration-count: $time;
               -moz-animation-iteration-count: $time;
                 -o-animation-iteration-count: $time;
                    animation-iteration-count: $time;
            -webkit-animation-timing-function: cubic-bezier(0.6, 0.1, 0.59, 0.93);
               -moz-animation-timing-function: cubic-bezier(0.6, 0.1, 0.59, 0.93);
                 -o-animation-timing-function: cubic-bezier(0.6, 0.1, 0.59, 0.93);
                    animation-timing-function: cubic-bezier(0.6, 0.1, 0.59, 0.93);
            -webkit-transform: translate3d(100%,0,0);
               -moz-transform: translate3d(100%,0,0);
                    transform: translate3d(100%,0,0);
        }
    }

    // Animation styles
    @keyframes number {
        0% {
            content: '6';
        }
        32% {
            content: '6';
        }
        33% {
            content: '5';
        }
        65% {
            content: '5';
        }
        66% {
            content: '4';
        }
        98% {
            content: '4';
        }
        99% {
            content: '3';
        }
        100% {
            content: '3';
        }
    }

    @-webkit-keyframes slideLeft {
        0% {
            -webkit-transform: translate3d(-50%, 0, 0);
                    transform: translate3d(-50%, 0, 0);
        }

        100% {
            -webkit-transform: translate3d(0%, 0, 0);
                    transform: translate3d(0%, 0, 0);
        }
    }

    @-moz-keyframes slideLeft {
        0% {
            -moz-transform: translate3d(-50%, 0, 0);
                 transform: translate3d(-50%, 0, 0);
        }

        100% {
            -moz-transform: translate3d(0%, 0, 0);
                 transform: translate3d(0%, 0, 0);
        }
    }

    @-o-keyframes slideLeft {
        0% {
            transform: translate3d(-50%, 0, 0);
        }

        100% {
            transform: translate3d(0%, 0, 0);
        }
    }

    @keyframes slideLeft {
        0% {
            -webkit-transform: translate3d(-50%, 0, 0);
               -moz-transform: translate3d(-50%, 0, 0);
                    transform: translate3d(-50%, 0, 0);
        }

        100% {
            -webkit-transform: translate3d(0%, 0, 0);
               -moz-transform: translate3d(0%, 0, 0);
                    transform: translate3d(0%, 0, 0);
        }
    }

        @-webkit-keyframes zoomIn {
        0% {
            -webkit-transform: scale(0.0);
                    transform: scale(0.0);
        }

        80% {
            -webkit-transform: scale(1.3);
                    transform: scale(1.3);
        }
        
        85% {
            -webkit-transform: scale(0.9);
                    transform: scale(0.9);
        }

        90% {
            -webkit-transform: scale(1.1);
                    transform: scale(1.1);
        }

        95% {
            -webkit-transform: scale(0.95);
                    transform: scale(0.95);
        }

        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
        }
        }

        @-moz-keyframes zoomIn {
        0% {
            -moz-transform: scale(0.0);
                 transform: scale(0.0);
        }

        80% {
            -moz-transform: scale(1.3);
                 transform: scale(1.3);
        }
        
        85% {
            -moz-transform: scale(0.9);
                 transform: scale(0.9);
        }

        90% {
            -moz-transform: scale(1.1);
                 transform: scale(1.1);
        }

        95% {
            -moz-transform: scale(0.95);
                 transform: scale(0.95);
        }

        100% {
            -moz-transform: scale(1);
                 transform: scale(1);
        }
        }

        @-o-keyframes zoomIn {
        0% {
            -o-transform: scale(0.0);
               transform: scale(0.0);
        }

        80% {
            -o-transform: scale(1.3);
               transform: scale(1.3);
        }
        
        85% {
            -o-transform: scale(0.9);
               transform: scale(0.9);
        }

        90% {
            -o-transform: scale(1.1);
               transform: scale(1.1);
        }

        95% {
            -o-transform: scale(0.95);
               transform: scale(0.95);
        }

        100% {
            -o-transform: scale(1);
               transform: scale(1);
        }
        }

        @keyframes zoomIn {
        0% {
            -webkit-transform: scale(0.0);
               -moz-transform: scale(0.0);
                 -o-transform: scale(0.0);
                    transform: scale(0.0);
        }

        80% {
            -webkit-transform: scale(1.3);
               -moz-transform: scale(1.3);
                 -o-transform: scale(1.3);
                    transform: scale(1.3);
        }
        
        85% {
            -webkit-transform: scale(0.9);
               -moz-transform: scale(0.9);
                 -o-transform: scale(0.9);
                    transform: scale(0.9);
        }

        90% {
            -webkit-transform: scale(1.1);
               -moz-transform: scale(1.1);
                 -o-transform: scale(1.1);
                    transform: scale(1.1);
        }

        95% {
            -webkit-transform: scale(0.95);
               -moz-transform: scale(0.95);
                 -o-transform: scale(0.95);
                    transform: scale(0.95);
        }

        100% {
            -webkit-transform: scale(1);
               -moz-transform: scale(1);
                 -o-transform: scale(1);
                    transform: scale(1);
        }
        }

    @-webkit-keyframes slideRight {
        0% {
            -webkit-transform: translate3d(0%, 0, 0);
                    transform: translate3d(0%, 0, 0);
        }

        100% {
            -webkit-transform: translate3d(50%, 0, 0);
                    transform: translate3d(50%, 0, 0);
        }
    }

    @-moz-keyframes slideRight {
        0% {
            -moz-transform: translate3d(0%, 0, 0);
                 transform: translate3d(0%, 0, 0);
        }

        100% {
            -moz-transform: translate3d(50%, 0, 0);
                 transform: translate3d(50%, 0, 0);
        }
    }

    @-o-keyframes slideRight {
        0% {
            transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(50%, 0, 0);
        }
    }

    @keyframes slideRight {
        0% {
            -webkit-transform: translate3d(0%, 0, 0);
               -moz-transform: translate3d(0%, 0, 0);
                    transform: translate3d(0%, 0, 0);
        }

        100% {
            -webkit-transform: translate3d(50%, 0, 0);
               -moz-transform: translate3d(50%, 0, 0);
                    transform: translate3d(50%, 0, 0);
        }
    }

    @-webkit-keyframes slideUp {
        0%{
            -webkit-transform: translate3d(0, 100%, 0);
                    transform: translate3d(0, 100%, 0);
        }

        100% {
            -webkit-transform: translate3d(0, 0%, 0);
                    transform: translate3d(0, 0%, 0);
        }
    }

    @-moz-keyframes slideUp {
        0%{
            -moz-transform: translate3d(0, 100%, 0);
                 transform: translate3d(0, 100%, 0);
        }

        100% {
            -moz-transform: translate3d(0, 0%, 0);
                 transform: translate3d(0, 0%, 0);
        }
    }

    @-o-keyframes slideUp {
        0%{
            transform: translate3d(0, 100%, 0);
        }

        100% {
            transform: translate3d(0, 0%, 0);
        }
    }

    @keyframes slideUp {
        0%{
            -webkit-transform: translate3d(0, 100%, 0);
               -moz-transform: translate3d(0, 100%, 0);
                    transform: translate3d(0, 100%, 0);
        }

        100% {
            -webkit-transform: translate3d(0, 0%, 0);
               -moz-transform: translate3d(0, 0%, 0);
                    transform: translate3d(0, 0%, 0);
        }
    }

    @-webkit-keyframes changeSize {
        0% {
            width: 100px;
            height: 0px;
        }

        100% {
            width: 60px;
            height: 60px;
        }
    }

    @-moz-keyframes changeSize {
        0% {
            width: 100px;
            height: 0px;
        }

        100% {
            width: 60px;
            height: 60px;
        }
    }

    @-o-keyframes changeSize {
        0% {
            width: 100px;
            height: 0px;
        }

        100% {
            width: 60px;
            height: 60px;
        }
    }

    @keyframes changeSize {
        0% {
            width: 100px;
            height: 0px;
        }

        100% {
            width: 60px;
            height: 60px;
        }
    }

    @-webkit-keyframes fill {
        0% {
            left: -100%;
        }
        32% {
            left: -100%;
        }
        34% {
            left: -66%;
        }
        36% {
            left: -76%;
        }
        38% {
            left: -70%;
        }
        64% {
            left: -70%;
        }
        66% {
            left: -33%;
        }
        68% {
            left: -43%;
        }
        70% {
            left: -37%;
        }
        93% {
            left: -37%;
        }
        95% {
            left: -0%;
        }
        97% {
            left: -6%;
        }
        99% {
            left: -2%;
        }
        100% {
            left: 0%;
        }
    }

    @-moz-keyframes fill {
        0% {
            left: -100%;
        }
        32% {
            left: -100%;
        }
        34% {
            left: -66%;
        }
        36% {
            left: -76%;
        }
        38% {
            left: -70%;
        }
        64% {
            left: -70%;
        }
        66% {
            left: -33%;
        }
        68% {
            left: -43%;
        }
        70% {
            left: -37%;
        }
        93% {
            left: -37%;
        }
        95% {
            left: -0%;
        }
        97% {
            left: -6%;
        }
        99% {
            left: -2%;
        }
        100% {
            left: 0%;
        }
    }

    @-o-keyframes fill {
        0% {
            left: -100%;
        }
        32% {
            left: -100%;
        }
        34% {
            left: -66%;
        }
        36% {
            left: -76%;
        }
        38% {
            left: -70%;
        }
        64% {
            left: -70%;
        }
        66% {
            left: -33%;
        }
        68% {
            left: -43%;
        }
        70% {
            left: -37%;
        }
        93% {
            left: -37%;
        }
        95% {
            left: -0%;
        }
        97% {
            left: -6%;
        }
        99% {
            left: -2%;
        }
        100% {
            left: 0%;
        }
    }

    @keyframes fill {
        0% {
            left: -100%;
        }
        32% {
            left: -100%;
        }
        34% {
            left: -66%;
        }
        36% {
            left: -76%;
        }
        38% {
            left: -70%;
        }
        64% {
            left: -70%;
        }
        66% {
            left: -33%;
        }
        68% {
            left: -43%;
        }
        70% {
            left: -37%;
        }
        93% {
            left: -37%;
        }
        95% {
            left: -0%;
        }
        97% {
            left: -6%;
        }
        99% {
            left: -2%;
        }
        100% {
            left: 0%;
        }
    }

    @-webkit-keyframes border {
        0% {
            width: 0;
            height: 0;
        }

        100% {
            width: 60px;
            height: 60px;
        }
    }

    @-moz-keyframes border {
        0% {
            width: 0;
            height: 0;
        }

        100% {
            width: 60px;
            height: 60px;
        }
    }

    @-o-keyframes border {
        0% {
            width: 0;
            height: 0;
        }

        100% {
            width: 60px;
            height: 60px;
        }
    }

    @keyframes border {
        0% {
            width: 0;
            height: 0;
        }

        100% {
            width: 60px;
            height: 60px;
        }
    }

    @-webkit-keyframes coin {
        from {
            -webkit-transform: translate3d(-200%,0,0);
                    transform: translate3d(-200%,0,0);
        }

        to {
            -webkit-transform: translate3d(100%,0,0);
                    transform: translate3d(100%,0,0);
        }
    }

    @-moz-keyframes coin {
        from {
            -moz-transform: translate3d(-200%,0,0);
                 transform: translate3d(-200%,0,0);
        }

        to {
            -moz-transform: translate3d(100%,0,0);
                 transform: translate3d(100%,0,0);
        }
    }

    @-o-keyframes coin {
        from {
            transform: translate3d(-200%,0,0);
        }

        to {
            transform: translate3d(100%,0,0);
        }
    }

    @keyframes coin {
        from {
            -webkit-transform: translate3d(-200%,0,0);
               -moz-transform: translate3d(-200%,0,0);
                    transform: translate3d(-200%,0,0);
        }

        to {
            -webkit-transform: translate3d(100%,0,0);
               -moz-transform: translate3d(100%,0,0);
                    transform: translate3d(100%,0,0);
        }
    }

    @-webkit-keyframes animationFrames {
        0% {
            -webkit-transform:  translate(-100%,0px);
                    transform:  translate(-100%,0px);
            opacity: 0;
        }
        10% {
            -webkit-transform:  translate(0%,0px);
                    transform:  translate(0%,0px);
            opacity: 1;
        }
        100% {
            -webkit-transform:  translate(0%,0px);
                    transform:  translate(0%,0px);
        }
    }

    @-moz-keyframes animationFrames {
        0% {
            -moz-transform:  translate(-100%,0px);
                 transform:  translate(-100%,0px);
            opacity: 0;
        }
        10% {
            -moz-transform:  translate(0%,0px);
                 transform:  translate(0%,0px);
            opacity: 1;
        }
        100% {
            -moz-transform:  translate(0%,0px);
                 transform:  translate(0%,0px);
        }
    }

    @-o-keyframes animationFrames {
        0% {
            -o-transform:  translate(-100%,0px);
               transform:  translate(-100%,0px);
            opacity: 0;
        }
        10% {
            -o-transform:  translate(0%,0px);
               transform:  translate(0%,0px);
            opacity: 1;
        }
        100% {
            -o-transform:  translate(0%,0px);
               transform:  translate(0%,0px);
        }
    }

    @keyframes animationFrames {
        0% {
            -webkit-transform:  translate(-100%,0px);
               -moz-transform:  translate(-100%,0px);
                 -o-transform:  translate(-100%,0px);
                    transform:  translate(-100%,0px);
            opacity: 0;
        }
        10% {
            -webkit-transform:  translate(0%,0px);
               -moz-transform:  translate(0%,0px);
                 -o-transform:  translate(0%,0px);
                    transform:  translate(0%,0px);
            opacity: 1;
        }
        100% {
            -webkit-transform:  translate(0%,0px);
               -moz-transform:  translate(0%,0px);
                 -o-transform:  translate(0%,0px);
                    transform:  translate(0%,0px);
        }
    }
</style>