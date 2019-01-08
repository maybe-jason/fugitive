<template>
  <div id="app">
    <div class="decks">
      <Deck :cards='firstDeck' :onClick='drawCard' :drawDeck='1' :currentPhase='currentPhase' />
      <Deck :cards='secondDeck' :onClick='drawCard' :drawDeck='2' :currentPhase='currentPhase' />
      <Deck :cards='thirdDeck' :onClick='drawCard' :drawDeck='3' :currentPhase='currentPhase' />
    </div>
    <div class="main">
      <button @click='sendMessage' name="button">Meme</button>
      <div class="turn">
        <h1>You are the {{ playerID }}</h1>
        <h1>{{ currentPlayer }}'s turn</h1>
        <h3>{{ currentPhase }}</h3>
      </div>
      <div>
        <Hand :hand='hideouts'
        :onClick='() => {}'
        isPlayed="[]"
        :revealedHideouts='revealedHideouts'
        className="hideouts"
        cardClass='card'
        :perspective='currentPlayer'/>
      </div>
      <div class="detective" v-if='this.currentPlayer === "Detective"'>
        <DetectiveControls
        :revealedHideouts='revealedHideouts'
        :detectiveGuesses='detectiveGuesses'
        :hand='detectiveHand'
        :onClick='makeGuess'
        :currentPhase='currentPhase'
        />
      </div>
      <div class="fugitive" v-if='this.currentPlayer === "Fugitive"'>
        <FugitiveControls
        :fugitiveHand='fugitiveHand'
        :proposedHideouts='proposedHideouts'
        :returnHideout='returnHideout'
        :submitHideout='submitHideout'
        :playHideout='playHideout'
        :currentPhase='currentPhase'
        :turnNumber='turnNumber'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Deck from './components/Deck'
import Hand from './components/Hand'
import DetectiveControls from './components/DetectiveControls.vue'
import FugitiveControls from './components/FugitiveControls.vue'
import io from 'socket.io-client';

var random = require("random-js")()

export default {
  name: 'app',
  components: {
    Deck,
    Hand,
    DetectiveControls,
    FugitiveControls
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
      turnNumber: 1,
      extraDraw: true,
      extraPlay: true,
      playerID: '',
      socket: io('localhost:3001'),
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
          if (this.turnNumber != 1 || !this.extraDraw) {
            this.currentPhase = 'Play'
          }
          else {
            this.extraDraw = false
          }
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
        if (this.proposedHideouts[0] - this.hideouts[this.hideouts.length-1] > 3 || this.proposedHideouts[0] < this.hideouts[this.hideouts.length-1] || this.proposedHideouts[0] < this.hideouts[this.hideouts.length-1][0]) {
          alert('add sprint cards')
        }
        else {
          this.hideouts.push(this.proposedHideouts[0])
          this.fugitiveHand.splice(this.fugitiveHand.indexOf(this.proposedHideouts[0]), 1)
          if (this.proposedHideouts[0] == 42) {
            this.currentPhase = 'SD'
            alert('The fugitive has escaped!')
          }
          this.proposedHideouts = []
          this.fugitiveHand.sort(function(a, b){return a - b});
          // this.currentPhase = 'Draw'
          if (this.turnNumber != 1 || !this.extraPlay) {
            this.currentPlayer = 'Detective'
            this.currentPhase = 'Draw'
          }
          else {
            this.extraPlay = false;
          }
          if (this.proposedHideouts[0] == 42) {
            this.currentPhase = 'SD'
            alert('The fugitive has escaped!')
          }
        }
      }
      else if (this.proposedHideouts.length > 1) {
        const sprintCards = this.proposedHideouts.slice(1)
        const sprintSum = sprintCards.reduce( (acc, curr) => {
          return acc + (curr%2 == 0 ? 2 : 1)
        }, 0)
        if ( (this.proposedHideouts[0] - sprintSum - this.hideouts[this.hideouts.length-1]) > 3 ||
        (this.proposedHideouts[0] - sprintSum - this.hideouts[this.hideouts.length-1][0]) > 3
        ) {
          alert('not in range')
        }
        else if (this.proposedHideouts[0] < this.hideouts[this.hideouts.length-1] || this.proposedHideouts[0] < this.hideouts[this.hideouts.length-1][0]) {
          alert('invalid hideout')
        }
        else {
          this.hideouts.push(this.proposedHideouts)
          this.fugitiveHand = this.fugitiveHand.filter( number => {
            return !this.proposedHideouts.includes(number)
          })
          if (this.proposedHideouts[0] == 42) {
            this.currentPhase = 'SD'
            alert('The fugitive has escaped!')
          }
          this.proposedHideouts = []
          this.fugitiveHand.sort(function(a, b){return a - b});
          if (this.turnNumber != 1 || !this.extraPlay) {
            this.currentPlayer = 'Detective'
            this.currentPhase = 'Draw'
          }
          else {
            this.extraPlay = false;
          }
        }
      }
      else {
        this.currentPhase = 'Draw'
        this.currentPlayer = 'Detective'
      }
    },
    makeGuess: function (number) {
      if (this.currentPhase === 'Guess') {
        this.detectiveGuesses.push(number)
        if (this.hideouts.includes(number)) {
          this.revealedHideouts.push(number)
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
        this.turnNumber += 1
        this.detectiveHand.sort(function(a, b){return a - b});
      }
    },
    sendMessage: function (e) {
      e.preventDefault()
      this.socket.emit('SEND_MESSAGE', {
        user: this.currentPlayer,
        message: 'memer'
      })
    }
  },
  mounted: function () {
    this.socket.on('MESSAGE_RECEIVED', (data) => {
      alert(data.message)
    })
    this.socket.on('FUGITIVE_CONNECTED', (data) => {
      if (this.playerID === '') {
        this.playerID = 'Fugitive'
      }
    })
    this.socket.on('DETECTIVE_CONNECTED', (data) => {
      if (this.playerID === '') {
        this.playerID = 'Detective'
      }
    })
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
  padding-right: 13px;
  /* background-color: blue; */
}

.main {
  text-align: center;
  justify-content: center;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}

.turn {
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}

</style>
