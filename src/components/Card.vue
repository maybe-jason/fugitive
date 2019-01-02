<template>
  <div class="card" :class='{ played: played }' @click='onClick(value)'>
    {{value}}
    <div v-if="suit == 1">
      <i style="font-size: 30px;" class="fas fa-plane"></i>
    </div>
    <div v-else>
      <i style="font-size: 30px;" class="fas fa-plane"></i><i style="font-size: 30px;" class="fas fa-plane"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    suit: {
      type: Number,
      required: false
    },
    value: {
      type: [Number, Array],
      required: true
    },
    image: {
      type: String,
      required: false
    },
    onClick: {
      type: Function,
      required: true
    },
    played: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  height: 200px;
  width: 150px;
  background-color: #cc99ff;
  box-shadow: 2px 2px;
  border-radius: 5px;
  border: 2px solid black;
  margin-right: 10px;
  text-align: left;
  text-indent: 10px;
  border-radius: 5px;
  font-family: "Staatliches", Times, serif;
  font-size: 50px;
}

.played {
  opacity: 0.5;
}
</style>
