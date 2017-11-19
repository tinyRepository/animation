<template>
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
</template>


<style lang="scss">
    $time: 6;
    $circle-size: 60px;
    $circle-color: #58BAFC;

    // Markup elements
    .counter-wrap {
        max-width: 500px;
        margin: auto;
        border: 1px solid;
        padding: 100px 50px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .counter {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;

        &__number {
            position: absolute;
            left: 50%;
            margin-left: -5px;
            top: 50%;
            margin-top: -10px;

            &::after {
                position: absolute;
                content: '6';
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
                content: '0';
            }
            15% {
                content: '0';
            }
            16% {
                content: '1';
            }
            31% {
                content: '1';
            }
            32% {
                content: '2';
            }
            47% {
                content: '2';
            }
            48% {
                content: '3';
            }
            63% {
                content: '3';
            }
            64% {
                content: '4';
            }
            79% {
                content: '4';
            }
            80% {
                content: '5';
            }
            95% {
                content: '5';
            }
            96% {
                content: '6';
            }
            100% {
                content: '6';
            }
        }

        @keyframes fill {
            0% {left: 0%;}
            // 1ый проход
            14% {left: 0%;}
            16% {left: 16%;}
            18% {left: 10%;}
            20% {left: 14%;}
            // 2ой проход
            30% {left: 14%;}
            32% {left: 30%;}
            34% {left: 24%;}
            36% {left: 28%;}
            // 3ий проход
            46% {left: 28%;}
            48% {left: 44%;}
            50% {left: 38%;}
            52% {left: 42%;}
            // 4ый проход
            62% {left: 42%;}
            64% {left: 58%;}
            66% {left: 52%;}
            68% {left: 56%;}
            // 5ый проход
            78% {left: 56%;}
            80% {left: 72%;}
            82% {left: 66%;}
            84% {left: 70%;}
            // 6ой проход
            94% {left: 70%;}
            96% {left: 86%;}
            98% {left: 80%;}
            100% {left: 84%;}
        }

        @keyframes coin {
            from {
                transform: translate3d(100%,0,0);
            }

            to {
                transform: translate3d(400%,0,0);
            }
        }



</style>