<template>
  <!-- <div> -->
    <div class='deck' @click='onClick(drawDeck)' :class='{ glow: currentPhase === "Draw" && currentPlayer === playerID }'
    :disabled='currentPlayer !== playerID'>
      <div v-if='drawDeck==1'>
        4-14 <br><br>
        &nbsp;&nbsp;({{cards.length}})
      </div>
      <div v-else-if='drawDeck==2'>
        15-28 <br><br>
        &nbsp;&nbsp;({{cards.length}})
      </div>
      <div v-else-if='drawDeck==3'>
        29-41 <br><br>
        &nbsp;&nbsp;({{cards.length}})
      </div>
    </div>

  <!-- </div> -->
</template>

<script>
export default {
  name: 'deck',
  props: ['cards', 'onClick', 'drawDeck', 'currentPhase', 'currentPlayer', 'playerID'],
  methods: {
    pushToDeck: function (card) {
      this.cards.push(card)
    }
  }
}
</script>
<style lang="css" scoped>
.deck {
  height: 200px;
  width: 150px;
  background-color: #cc99ff;
  margin: 50px;
  text-align: left;
  text-indent: 10px;
  font-family: "Staatliches", Times, serif;
  font-size: 50px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 7px 7px 0 0 #BA74FF, 13px 13px 0 0 #8451B5;
}

@keyframes glowing {
  0% { box-shadow: 0 0 10px #56E0AE, 7px 7px 0 0 #BA74FF, 13px 13px 0 0 #8451B5; }
  20% { box-shadow: 0 0 30px #56E0AE, 7px 7px 0 0 #BA74FF, 13px 13px 0 0 #8451B5; }
  40% { box-shadow: 0 0 50px #56E0AE, 7px 7px 0 0 #BA74FF, 13px 13px 0 0 #8451B5; }
  60% { box-shadow: 0 0 30px #56E0AE, 7px 7px 0 0 #BA74FF, 13px 13px 0 0 #8451B5; }
  100% { box-shadow: 0 0 10px #56E0AE, 7px 7px 0 0 #BA74FF, 13px 13px 0 0 #8451B5; }
}

.glow {
  animation: glowing 3000ms infinite;
}

.glow:hover {
  --translation: 1.08;
  transform: scale(calc(var(--translation)));
  transition-duration: .3s;
}


</style>
