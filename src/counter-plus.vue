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


<style lang="scss" scoped>
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
                content: '0';
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
                content: '6';
            }
            15% {
                content: '6';
            }
            16% {
                content: '5';
            }
            31% {
                content: '5';
            }
            32% {
                content: '4';
            }
            47% {
                content: '4';
            }
            48% {
                content: '3';
            }
            63% {
                content: '3';
            }
            64% {
                content: '2';
            }
            79% {
                content: '2';
            }
            80% {
                content: '1';
            }
            95% {
                content: '1';
            }
            96% {
                content: '0';
            }
            100% {
                content: '0';
            }
        }

        @keyframes fill {
            0% {left: -100%;}
            // 1ый проход
            14% {left: -100%;}
            16% {left: -70%;}
            18% {left: -76%;}
            20% {left: -72%;}
            // 2ой проход
            30% {left: -72%;}
            32% {left: -56%;}
            34% {left: -62%;}
            36% {left: -58%;}
            // 3ий проход
            46% {left: -58%;}
            48% {left: -42%;}
            50% {left: -48%;}
            52% {left: -44%;}
            // 4ый проход
            62% {left: -44%;}
            64% {left: -28%;}
            66% {left: -34%;}
            68% {left: -30%;}
            // 5ый проход
            78% {left: -30%;}
            80% {left: -14%;}
            82% {left: -20%;}
            84% {left: -16%;}
            // 6ой проход
            94% {left: -16%;}
            96% {left: 0%;}
            98% {left: -6%;}
            100% {left: -2%;}
        }

        @keyframes coin {
            from {
                transform: translate3d(-200%,0,0);
            }

            to {
                transform: translate3d(100%,0,0);
            }
        }



</style>