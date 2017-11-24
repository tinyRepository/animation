<template>
    <div class="bet-container">
        <div class="hidden-container">
            <div class="coin">
                <img src="./assets/rcomet-tail.svg" class="coin-tail">
                <img src="./assets/rcomet-body.svg" class="coin-body">
            </div>

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
            animation: coinSlide 0.5s 1 forwards, levitation 3s 2s 2 forwards;

            &-tail {
                position: absolute;
                top: 2px;
                left: 2px;
                animation: pulse 0.7s infinite forwards;
            }

            &-body {
                position: relative;
                z-index: 1;
            }
        }
    }

    .hidden-container {
        margin: auto;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: hideEnd 0.6s 7s 1 forwards;
    }

    .bet-difference {
        color: #E66A32;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
        animation: slideUp 0.5s 1 forwards;
    }

    .bet-info {
        color: rgb(113, 126, 158);
        font-family: Arial, Helvetica, sans-serif;
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

