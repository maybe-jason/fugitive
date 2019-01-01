<template>
  <div>
    This deck has {{cards.length}} cards in it.
  </div>
</template>

<script>
export default {
  name: 'deck',
  props: ['cards'],
  methods: {
    pushToDeck: function (card) {
      this.cards.push(card)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
