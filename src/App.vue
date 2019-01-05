<template>
  <div id="app">
    <div class="decks">
      <Deck :cards='firstDeck' :onClick='drawCard' :drawDeck='1' />
      <Deck :cards='secondDeck' :onClick='drawCard' :drawDeck='2' />
      <Deck :cards='thirdDeck' :onClick='drawCard' :drawDeck='3' />
    </div>
    <div class="main">
      <div class="turn">
        <h1>{{ currentPlayer }}'s turn</h1>
        <h3>{{ currentPhase }} phase</h3>
      </div>
      <div>
        <DetectiveGrid :hideouts='revealedHideouts' :guesses='detectiveGuesses' :onClick='makeGuess'/>
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
  </div>
</template>

<script>
import Deck from './components/Deck'
import Hand from './components/Hand'
import DetectiveGrid from './components/DetectiveGrid.vue'

var random = require("random-js")()

export default {
  name: 'app',
  components: {
    Deck,
    Hand,
    DetectiveGrid
  },
  data: function () {
    return {
      firstDeck: random.shuffle([4,5,6,7,8,9,10,11,12,13,14]),
      secondDeck: random.shuffle([15,16,17,18,19,20,21,22,23,24,25,26,27,28]),
      thirdDeck: random.shuffle([29,30,31,32,33,34,35,36,37,38,39,40,41]),
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
          this.currentPhase = 'Guess'
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
        const sprintSum = sprintCards.reduce( (acc, curr) => {
          return acc + (curr%2 == 0 ? 2 : 1)
        }, 0)
        if ( (this.proposedHideouts[0] - sprintSum - this.hideouts[this.hideouts.length-1]) > 3) {
          alert('not in range')
        }
        else {
          this.hideouts.push(this.proposedHideouts)
          this.fugitiveHand = this.fugitiveHand.filter( number => {
            return !this.proposedHideouts.includes(number)
          })
          this.proposedHideouts = []
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
      if (this.currentPhase === 'Guess' && !this.detectiveGuesses.includes(number)) {
        this.detectiveGuesses.push(number)
        if (this.hideouts.includes(number)) {
          this.revealedHideouts.push(number)
          alert('GOTTEM!')
        }
        else {
          this.hideouts.filter( element => {
            if (Array.isArray(element)) {
              if (element[0] == number) {
                for (let i = 0; i < element.length; i++) {
                  this.revealedHideouts.push(element[i])
                }
              }
            }
          })
        }
        this.currentPhase = 'Draw'
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
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 100px;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}

</style>
