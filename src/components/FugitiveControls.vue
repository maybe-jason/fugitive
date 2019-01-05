<template>
  <div>
    <Hand
    :hand='proposedHideouts'
    :onClick='returnHideout'
    isPlayed="[]"
    :revealedHideouts='[]'
    className="proposedHideouts"/>
    <div v-if='proposedHideouts.length > 0'>
      <button @click='submitHideout'>Play Hideouts</button>
    </div>
    <div v-else-if='currentPhase === "Play"'>
      <button @click='submitHideout'>Pass</button>
    </div>
    <h2>Fugitive hand: </h2>
    <Hand
    :hand='fugitiveHand'
    :onClick='playHideout'
    :isPlayed='proposedHideouts'
    :revealedHideouts='[]'
    className="cardHand"/>
  </div>
</template>

<script>
import Hand from './Hand.vue'

export default {
  name: 'fugitiveControls',
  components: {
    Hand
  },
  props: ['proposedHideouts', 'returnHideout', 'fugitiveHand', 'submitHideout', 'playHideout', 'currentPhase']
}
</script>

<style lang="css" scoped>
</style>
