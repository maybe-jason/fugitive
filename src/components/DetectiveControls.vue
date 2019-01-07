<template>
  <div>
    <h2>Detective hand: </h2>
    <Hand
    :hand='hand'
    :onClick='() => {}'
    isPlayed="[]"
    :revealedHideouts='[]'
    className='cardHand'
    cardClass='card'
    />
    <DetectiveGrid
    :hideouts='revealedHideouts' :guesses='detectiveGuesses'
    :onClick='onClick'
    :currentPhase='currentPhase'/>
  </div>
</template>

<script>
import DetectiveGrid from './DetectiveGrid'
import Hand from './Hand'

export default {
  name: 'DetectiveControls',
  components: {
    DetectiveGrid,
    Hand
  },
  props: ['revealedHideouts', 'detectiveGuesses', 'hand', 'onClick', 'currentPhase']
}
</script>

<style lang="css" scoped>
</style>
