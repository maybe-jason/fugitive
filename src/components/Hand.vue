<template>
  <div>
    <ul :class=' { cardHand: className==="cardHand", proposedHideouts: className==="proposedHideouts", hideouts: className==="hideouts", glow: currentPhase==="Play"}' v-if="hand.length > 0">
      <li
        is="card"
        :className='cardClass'
        v-for="card in hand"
        :value="card"
        :suit="card % 2 === 0 ? 2 : 1"
        :onClick="onClick"
        :played="isPlayed.includes(card)"
        :revealed="revealed.includes(card) || revealed.includes(card[0])"
        :perspective='perspective'
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
  props: ['hand', 'onClick', 'isPlayed', 'revealedHideouts', 'className', 'cardClass', 'perspective', 'currentPhase'],
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
.cardHand, .proposedHideouts {
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  /* height: 420px; */
  width: 49%;
  justify-content: center;
  /* background-color: blue; */
  padding-top: 15px;
  padding-right: 20px;
}

@keyframes glowing {
  0% { box-shadow: 0 0 10px #56E0AE; }
  20% { box-shadow: 0 0 30px #56E0AE; }
  40% { box-shadow: 0 0 50px #56E0AE; }
  60% { box-shadow: 0 0 30px #56E0AE; }
  100% { box-shadow: 0 0 10px #56E0AE;}
}

.glow {
  animation: glowing 3000ms infinite;
}

.hideouts {
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  width: 49%;
  justify-content: center;
}

</style>
