<template>
  <div class="hand">
    <ul v-if="hand.length">
      <li
        is="card"
        v-for="card in hand"
        :value="card"
        :suit="card % 2 === 0 ? 2 : 1"
        :onClick="onClick"
        :played="'isPlayed.indexOf(value)' > -1"
        :key='card.value'>
      </li>
    </ul>
    <h4 v-else>Empty!</h4>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'hand',
  components: {
    Card
  },
  props: ['hand', 'onClick', 'isPlayed'],
}
</script>

<style lang="css" scoped>
ul {
  display: flex;
  justify-content: center;
}
</style>
