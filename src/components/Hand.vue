<template>
  <div>
    <ul :class='className' v-if="hand.length > 0">
      <li
        is="card"
        v-for="card in hand"
        :value="card"
        :suit="card % 2 === 0 ? 2 : 1"
        :onClick="onClick"
        :played="isPlayed.includes(card)"
        :revealed="revealed.includes(card) || revealed.includes(card[0])"
        :key='card.value'>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'hand',
  components: {
    Card
  },
  props: ['hand', 'onClick', 'isPlayed', 'revealedHideouts', 'className'],
  computed: {
    revealed: function () {
      return this.revealedHideouts.filter( element => {
        if (this.revealedHideouts.includes(element)) {
          return true
        }
        if (Array.isArray(element)) {
          if (this.revealedHideouts.includes(element[0])) {
            return true
          }
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.cardHand {
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  /* height: 420px; */
  width: 50%;
  justify-content: center;
}

.hideouts {
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  width: fit-content;
  justify-content: center;
}

.proposedHideouts {
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  /* height: 200px; */
  width: 50%;
  justify-content: center;
}
</style>
