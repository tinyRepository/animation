<template>
    <div class="bet-container">
        <div class="hidden-container">
            <!-- svg images -->
            <div class="coin">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="77" xmlns:xlink="http://www.w3.org/1999/xlink" class="coin-tail">
                    <use fill="url(#b1)" fill-opacity=".5" xlink:href="#a1" transform="rotate(180 16.645 31.862)"/>
                    <use fill="url(#d1)" fill-opacity=".5" xlink:href="#c1" transform="rotate(180 12.57 38.5)"/>
                    <defs>
                        <linearGradient id="b1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -63.7241 32.5714 0 0 63.724)">
                            <stop offset="0" class="tail-color"/>
                            <stop offset="1" class="tail-color" stop-opacity="0"/>
                        </linearGradient>
                        <linearGradient id="d1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -77 16.2857 0 0 77)">
                            <stop offset="0" class="tail-color"/>
                            <stop offset="1" class="tail-color" stop-opacity="0"/>
                        </linearGradient>
                        <path id="a1" d="M0 0h32.57v47.438c0 8.995-7.29 16.286-16.284 16.286C7.29 63.724 0 56.434 0 47.438V0z"/>
                        <path id="c1" d="M0 0h16.286v68.857c0 4.497-3.646 8.143-8.143 8.143C3.646 77 0 73.354 0 68.857V0z"/>
                    </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" class="coin-body">
                    <g transform="translate(-1279 -351)">
                        <use xlink:href="#a" transform="rotate(180 659 194.586)" class="border-circle"/>
                        <mask id="b">
                        <path fill="#fff" d="M1319 390.172h-40v-40h40z"/>
                        <use xlink:href="#a" transform="rotate(180 659 194.586)"/>
                        </mask>
                        <use fill="#FFF" xlink:href="#c" transform="rotate(180 659 194.586)" mask="url(#b)"/>
                    </g>
                    <g transform="translate(-1279 -351)">
                        <use xlink:href="#d" transform="rotate(180 656 191.5)" class="inner-circle"/>
                        <mask id="e">
                        <path d="M1313 384h-28v-27h28z"/>
                        <use xlink:href="#d" transform="rotate(180 656 191.5)"/>
                        </mask>
                        <use fill="#FFF" fill-opacity=".6" xlink:href="#f" transform="rotate(180 656 191.5)" mask="url(#e)"/>
                    </g>
                    <use fill="#FFF" xlink:href="#g" transform="translate(16 14)"/>
                    <defs>
                        <path id="a" d="M38 18.586c0 10.265-8.507 18.586-19 18.586S0 28.852 0 18.586C0 8.32 8.507 0 19 0s19 8.32 19 18.586z"/>
                        <path id="c" d="M37 18.586c0 9.692-8.038 17.586-18 17.586v2c11.025 0 20-8.748 20-19.586h-2zM19 36.172c-9.962 0-18-7.894-18-17.586h-2c0 10.838 8.975 19.586 20 19.586v-2zM1 18.586C1 8.894 9.038 1 19 1v-2C7.975-1-1 7.748-1 18.586h2zM19 1c9.962 0 18 7.894 18 17.586h2C39 7.748 30.025-1 19-1v2z"/>
                        <path id="d" d="M26 12.5C26 19.404 20.18 25 13 25S0 19.404 0 12.5 5.82 0 13 0s13 5.596 13 12.5z"/>
                        <path id="f" d="M25 12.5C25 18.815 19.665 24 13 24v2c7.695 0 14-6.008 14-13.5h-2zM13 24C6.335 24 1 18.815 1 12.5h-2C-1 19.992 5.305 26 13 26v-2zM1 12.5C1 6.185 6.335 1 13 1v-2C5.305-1-1 5.008-1 12.5h2zM13 1c6.665 0 12 5.185 12 11.5h2C27 5.008 20.695-1 13-1v2z"/>
                        <path id="g" d="M7.392 3.692c.08.875-.21 1.495-.872 1.86.52.136.907.383 1.165.744.257.36.357.875.3 1.543-.032.34-.105.64-.22.9-.11.26-.253.474-.426.642-.174.168-.39.31-.647.426-.257.11-.527.192-.81.245-.28.053-.602.09-.966.108V12H3.892v-1.81c-.355 0-.625-.002-.81-.007V12H2.055v-1.84c-.08 0-.2 0-.36-.006H.002l.206-1.32h.74c.22 0 .35-.122.385-.368v-2.9h.107c-.026-.003-.062-.006-.106-.006V3.49C1.274 3.163 1.077 3 .74 3H0V1.817l1.41.008c.284 0 .5-.003.646-.008V0H3.08v1.78c.364-.008.635-.013.812-.013V0h1.025v1.817c.35.034.66.09.93.166.272.072.523.18.753.325.23.14.413.327.546.562.137.23.22.505.246.822zm-1.43 3.93c0-.172-.034-.326-.1-.46-.067-.136-.15-.246-.246-.333-.098-.087-.227-.16-.386-.217-.156-.063-.3-.108-.433-.137-.133-.03-.297-.05-.492-.065-.195-.013-.348-.02-.46-.02-.11 0-.254.002-.432.007l-.312.007V8.84c.036 0 .118.004.247.01h.32c.083 0 .2-.004.352-.01.15-.008.278-.018.385-.027.11-.015.237-.037.38-.065.145-.03.27-.063.37-.1.103-.04.208-.09.314-.153.11-.062.2-.134.265-.216.067-.083.12-.18.16-.29.044-.11.067-.233.067-.367zM5.49 4.19c0-.16-.03-.298-.087-.418-.054-.125-.12-.226-.2-.303-.08-.083-.186-.15-.32-.203-.132-.058-.254-.1-.365-.123-.11-.024-.25-.043-.413-.057-.16-.015-.288-.02-.386-.015-.094 0-.214.003-.36.007H3.1v2.213l.227.007h.312c.075-.004.186-.01.332-.014.147-.01.268-.024.366-.043.098-.02.21-.046.34-.08.132-.033.24-.076.325-.13.085-.057.167-.122.247-.194.08-.078.14-.172.18-.282.04-.11.06-.233.06-.368z"/>
                    </defs>
                </svg>
            </div>
            <!-- /svg images -->

            <div class="bet-difference">
            - 0,5025600  BTC
            </div>

            <div class="bet-info">
                Unfortunately, Bittrex changed their prices earlier then expected
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    // Variables
    $mainFont: Arial, Helvetica, sans-serif;
    $textColor: rgb(113, 126, 158);

    $mainColor: #E66A32;
    $coinBorderColor: darken( desaturate( adjust-hue( $mainColor, -9deg ), 6 ), 3 );
    $tailMainColor: lighten( saturate( $mainColor, 18 ), 12 );

    $mainTime: 0.5s;
    $levitationTime: 3s;
    $sumLevitaionItteration: 2;
    $allAnimationTime: $levitationTime + ($mainTime*4)*$sumLevitaionItteration;

    .bet-container {
        max-width: 500px;
        margin: auto;
        border: 1px solid;
        padding: 70px 50px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .coin {
            position: relative;
            display: flex;
            flex-direction: column;
            margin-bottom: 60px;
            animation: coinSlide $mainTime 1 forwards, levitation $levitationTime $mainTime*4 $sumLevitaionItteration forwards;

            &-tail {
                position: absolute;
                top: 2px;
                left: 2px;
                animation: pulse $mainTime infinite forwards;
            }

            &-body {
                position: relative;
                z-index: 1;
            }
        }
    }

    svg {
        .inner-circle {
            fill: $mainColor;
        }

        .border-circle {
            fill: $coinBorderColor;
        }

        .tail-color {
            stop-color: $tailMainColor;
        }
    }

    .hidden-container {
        margin: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: hideEnd $mainTime $allAnimationTime 1 forwards;
    }

    .bet-difference {
        color: $mainColor;
        font-family: $mainFont;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
        animation: slideUp $mainTime 1 forwards;
    }

    .bet-info {
        color: $textColor;
        font-family: $mainFont;
        font-size: 12px;
        font-weight: 500;
        max-width: 250px;
    }

    @keyframes slideUp {
        0% {
            transform: translate3d(0, 150%, 0);
            opacity: 0;
        }

        100% {
            transform: translate3d(0, 0%, 0);
            opacity: 1;
        }
    }

    @keyframes pulse {
        0% {
            opacity: 0.8;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes coinSlide {
        0% {
            transform: translate3d(0, 400%, 0);
            opacity: 0;
        }

        100% {
            transform: translate3d(0, 0%, 0);
            opacity: 1;
        }
    }
    
    @keyframes levitation {
        0% {
            transform: translate3d(0, -10%, 0);
        }

        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes hideEnd {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
</style>

