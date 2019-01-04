<template>
  <div id="app">
    <div class="turn">
      <h1>{{ currentPlayer }}'s turn</h1>
      <h3>{{ currentPhase }} phase</h3>
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
      <DetectiveGrid :hideouts='hideouts' :guesses='detectiveGuesses' :onClick='makeGuess'/>
    </div>
    <div class="hideouts">
      <Hand :hand='hideouts'
      :onClick='() => {}'
      isPlayed="[]"
      :revealedHideouts='revealedHideouts'/>
    </div>
    <div>
      <h2>Detective hand: </h2>
      <Hand
      :hand='detectiveHand'
      :onClick='() => {}'
      isPlayed="[]"
      :revealedHideouts='[]'
      />
      <h2>Fugitive hand: </h2>
      <Hand :hand='proposedHideouts' :onClick='returnHideout' isPlayed="[]" :revealedHideouts='[]'/>
        <button @click='submitHideout'>Submit</button>
      <Hand
      :hand='fugitiveHand'
      :onClick='playHideout'
      :isPlayed='proposedHideouts'
      :revealedHideouts='[]'/>
    </div>
  </div>
</template>

<script>
import Deck from './components/Deck'
import Hand from './components/Hand'
import DetectiveGrid from './components/DetectiveGrid.vue'

export default {
  name: 'app',
  components: {
    Deck,
    Hand,
    DetectiveGrid
  },
  data: function () {
    return {
      firstDeck: [4,5,6,7,8,9,10,11,12,13,14].reverse(),
      secondDeck: [15,16,17,18,19,20,21,22,23,24,25,26,27,28],
      thirdDeck: [29,30,31,32,33,34,35,36,37,38,39,40,41],
      fugitiveHand: [1,2,3,42],
      detectiveHand: [],
      hideouts: [0],
      proposedHideouts: [],
      detectiveGuesses: [],
      revealedHideouts: [0],
      currentPlayer: 'Fugitive',
      currentPhase: 'Draw',
      turnNumber: 1
    }
  },
  methods: {
    drawCard: function (deckNum) {
      if (this.currentPhase === 'Draw') {
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
          // this.fugitiveHand.sort(function(a, b){return a-b})
          this.currentPhase = 'Play'
          // this.currentPlayer = 'Detective'
        }
        else if (this.currentPlayer === 'Detective') {
          this.detectiveHand.push(drawDeck.pop())
          // this.detectiveHand.sort(function(a, b){return a-b})
          this.currentPlayer = 'Fugitive'
        }
      }
    },
    playHideout: function (card) {
      if (this.currentPhase === 'Play' && !this.proposedHideouts.includes(card)) {
        this.proposedHideouts.push(card)
        // this.fugitiveHand.splice(this.fugitiveHand.indexOf(card), 1)
      }
    },
    returnHideout: function (card) {
      this.proposedHideouts.splice(this.proposedHideouts.indexOf(card), 1)
    },
    submitHideout: function () {
      if (this.proposedHideouts.length == 1) {
        if (this.proposedHideouts[0] - this.hideouts[this.hideouts.length-1] > 3) {
          alert('add sprint cards')
        }
        else {
          this.hideouts.push(this.proposedHideouts[0])
          this.fugitiveHand.splice(this.fugitiveHand.indexOf(this.proposedHideouts[0]), 1)
          this.proposedHideouts = []
          this.currentPhase = 'Draw'
          this.currentPlayer = 'Detective'
        }
      }
      else if (this.proposedHideouts.length > 1) {
        const sprintCards = this.proposedHideouts.slice(1)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const sprintSum = sprintCards.reduce(reducer)
        if ( (this.proposedHideouts[0] - sprintSum - this.hideouts[this.hideouts.length-1]) > 3) {
          alert('not in range')
        }
        else {
          alert('ok')
          this.hideouts.push(this.proposedHideouts)
          this.currentPhase = 'Draw'
          this.currentPlayer = 'Detective'
        }
      }
      else {
        this.currentPhase = 'Draw'
        this.currentPlayer = 'Detective'
      }
    },
    makeGuess: function (number) {
      this.detectiveGuesses.push(number)
      if (this.hideouts.includes(number)) {
        this.revealedHideouts.push(number)
        alert('GOTTEM!')
      }
      this.currentPhase = 'Draw'
      this.currentPlayer = 'Fugitive'
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
  /* transform: rotate(90deg); */
}

</style>
