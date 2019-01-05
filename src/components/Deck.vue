<template>
  <!-- <div> -->
    <div class='deck' @click='onClick(drawDeck)'>
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
  props: ['cards', 'onClick', 'drawDeck'],
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

.deck:hover {
  --translation: 1.03;
  transform: scale(calc(var(--translation)));
  transition-duration: .3s;
}


</style>
