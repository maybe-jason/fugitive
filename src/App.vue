<template>
  <div id="app">
    <div class="turn">
      <h1>{{ currentPlayer }}'s turn</h1>
    </div>
    <div class="decks">
      <Deck :cards='firstDeck'/>
      <button @click='drawCard(1)'>Draw</button>
      <Deck :cards='secondDeck'/>
      <button @click='drawCard(2)'>Draw</button>
      <Deck :cards='thirdDeck'/>
      <button @click='drawCard(3)'>Draw</button>
    </div>
    <div>
      <h2>Detective hand: </h2>
      <Hand :hand='detectiveHand' />
      <h2>Fugitive hand: </h2>
      <Hand :hand='fugitiveHand' />
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import Deck from './components/Deck'
import Hand from './components/Hand'

export default {
  name: 'app',
  components: {
    Card,
    Deck,
    Hand
  },
  data: function () {
    return {
      firstDeck: [4,5,6,7,8,9,10,11,12,13,14],
      secondDeck: [15,16,17,18,19,20,21,22,23,24,25,26,27,28],
      thirdDeck: [29,30,31,32,33,34,35,36,37,38,39,40,41],
      fugitiveHand: [1,2,3,42],
      detectiveHand: [],
      currentPlayer: 'Fugitive',
      turnNumber: 1
    }
  },
  methods: {
    drawCard: function (deckNum) {
      let drawDeck;
      if (deckNum === 1) {
        drawDeck = this.firstDeck
      }
      else if (deckNum === 2) {
        drawDeck = this.secondDeck
      }
      else {
        drawDeck = this.thirdDeck
      }
      if (drawDeck.length === 0) {
        alert('deck empty!')
      }
      if (this.currentPlayer === 'Fugitive') {
        this.fugitiveHand.push(drawDeck.pop())
        this.currentPlayer = 'Detective'
      }
      else if (this.currentPlayer === 'Detective') {
        this.detectiveHand.push(drawDeck.pop())
        this.currentPlayer = 'Fugitive'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica,Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.decks {
  display: flex;
  justify-content: center;
}

.cards {
  display: flex;
  justify-content: center;
}
</style>
