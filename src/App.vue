<template>
  <div>
    <h1>Анимации</h1>
    <nav>
      <a href="#" @click="currentAnimation = 0">Радар</a>
      <a href="#" @click="currentAnimation = 1">Счетчик увеличивается</a>
      <a href="#" @click="currentAnimation = 2">Счетчик уменьшается</a><br>
      <a href="#" @click="currentAnimation = 3">Ставка выиграла</a>
      <a href="#" @click="currentAnimation = 4">Ставка проиграла</a>
    </nav>
    <Radar v-if="currentAnimation === 0"></Radar>
    <CounterPlus v-if="currentAnimation === 1"></CounterPlus>
    <CounterMinus v-if="currentAnimation === 2"></CounterMinus>
    <BetWin v-if="currentAnimation === 3"></BetWin>
    <BetLose v-if="currentAnimation === 4"></BetLose>
  </div>
</template>

<script>
import CounterMinus from './counter-minus.vue';
import CounterPlus from './counter-plus.vue';
import BetWin from './bet-win.vue';
import BetLose from './bet-lose.vue'
import Radar from './radar.vue';

export default {
	components: {
		Radar,
    CounterPlus,
    CounterMinus,
    BetWin,
    BetLose
  },
  data() {
    return {
      currentAnimation: 4
    };
  }
}
</script>