<template>
  <div :class="{ card: className === 'card', handCard: className === 'handCard', proposedCard: className === 'proposedCard', perspective: (perspective === 'Detective') && (!revealed), played: played, revealed: revealed, two: value.length === 2, multiple: value.length > 2 }" @click='onClick(value)'>
    <div v-if="Array.isArray(value)">
      {{value[0]}} ({{value.length-1}})
    </div>
    <div v-else>
      {{value}}
    </div>
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
    },
    revealed: {
      type: Boolean,
      required: false
    },
    className: {
      type: String,
      required: true
    },
    perspective: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="css" scoped>
.card, .handCard, .proposedCard {
  height: 200px;
  width: 150px;
  background-color: #cc99ff;
  margin-right: 15px;
  margin-bottom: 15px;
  text-align: left;
  text-indent: 10px;
  font-family: "Staatliches", Times, serif;
  font-size: 50px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
}

.handCard:hover {
  --translation: 10;
  transform: translateY(calc(var(--translation) * -1px));
  /* transform: translateY(-10px); */
  transition-duration: .3s;
}

.proposedCard:hover {
  --translation: 10;
  transform: translateY(calc(var(--translation) * 1px));
  /* transform: translateY(-10px); */
  transition-duration: .3s;
}

.two {
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 7px 7px 0 0 #BA74FF;
}

.multiple {
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 7px 7px 0 0 #BA74FF, 13px 13px 0 0 #8451B5;
}

.played {
  opacity: 0.5;
}

.revealed {
  background-color: #FFB8B8;
}

.perspective {
  color: transparent;
  user-select: none;
}

.two.revealed {
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 7px 7px 0 0 #FF9C9C;
}

.multiple.revealed {
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2), 7px 7px 0 0 #FF9C9C, 13px 13px 0 0 #FF6464;
}
</style>
