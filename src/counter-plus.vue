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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .counter-wrap {
        max-width: 500px;
        margin-bottom: 20px;
        margin: auto;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .counter {
        position: relative;
        display: flex;
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
            color: rgb(11, 59, 91);
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 5px;
            animation: animationFrames linear 4s;
            animation-iteration-count: 1;
            transform-origin: 50% 50%;
            transform: translate3d(100%, 0, 0);
            animation-fill-mode: forwards;
        }

        &__course {
            color: rgb(113, 126, 158);
            font-family: Arial;
            font-size: 12px;
            font-style: normal;
            word-wrap: break-word;
            font-weight: 500;
            transform: translate3d(0, 0%, 0);
            animation: slideUp 0.3s;
        }
    }

    .coin {
        &__svg {
            animation: coin 1s;
            animation-iteration-count: $time;
            animation-timing-function: cubic-bezier(0.6, 0.1, 0.59, 0.93);
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

    @keyframes slideLeft {
        0% {
            transform: translate3d(-50%, 0, 0);
        }

        100% {
            transform: translate3d(0%, 0, 0);
        }
    }

        @keyframes zoomIn {
            0% {
                transform: scale(0.0);
            }

            80% {
                transform: scale(1.3);
            }
            
            85% {
                transform: scale(0.9);
            }

            90% {
                transform: scale(1.1);
            }

            95% {
                transform: scale(0.95);
            }

            100% {
                transform: scale(1);
            }
        }

    @keyframes slideRight {
        0% {
            transform: translate3d(0%, 0, 0);
        }

        100% {
            transform: translate3d(50%, 0, 0);
        }
    }

    @keyframes slideUp {
        0%{
            transform: translate3d(0, 100%, 0);
        }

        100% {
            transform: translate3d(0, 0%, 0);
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


    @keyframes coin {
        from {
            transform: translate3d(-200%,0,0);
        }

        to {
            transform: translate3d(100%,0,0);
        }
    }

    @keyframes animationFrames {
        0% {
            transform:  translate(-100%,0px);
            opacity: 0;
        }
        10% {
            transform:  translate(0%,0px);
            opacity: 1;
        }
        100% {
            transform:  translate(0%,0px);
        }
    }
</style>