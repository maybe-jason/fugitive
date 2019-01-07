<template>
  <div>
    <Hand
    :hand='proposedHideouts'
    :onClick='returnHideout'
    isPlayed="[]"
    :revealedHideouts='[]'
    className="proposedHideouts"
    cardClass='proposedCard'/>
    <button class='passButton' @click='submitHideout' :disabled='currentPhase !== "Play" || turnNumber == 1'>Pass</button>
    <button class='submitButton' @click='submitHideout' :disabled='currentPhase !== "Play" || proposedHideouts.length == 0'>Play Hideouts</button>
    <h2>Fugitive hand: </h2>
    <Hand
    :hand='fugitiveHand'
    :onClick='playHideout'
    :isPlayed='proposedHideouts'
    :revealedHideouts='[]'
    :currentPhase='currentPhase'
    className="cardHand"
    cardClass='handCard'/>
  </div>
</template>

<script>
import Hand from './Hand.vue'

export default {
  name: 'fugitiveControls',
  components: {
    Hand
  },
  props: ['proposedHideouts', 'returnHideout', 'fugitiveHand', 'submitHideout', 'playHideout', 'currentPhase', 'turnNumber']
}
</script>

<style lang="css" scoped>
button {
  font-family: 'Staatliches', Helvetica, Arial, sans-serif;
  font-size: 30px;
  color: white;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  background-color: #cc99ff;
  border: 2px solid #cc99ff;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-right: 20px;
}

button:disabled {
  background-color: #e6e6e6;
  border: 2px solid #e6e6e6;
}

</style>
