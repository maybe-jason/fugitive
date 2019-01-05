<template>
  <div>
    <div class="grid-container">
      <div @click='onClick(1)' class="grid-item" :class="{ wrong: wrong.includes(1), correct: hideouts.includes(1) }">1</div>
      <div @click='onClick(2)' class="grid-item" :class="{ wrong: wrong.includes(2), correct: hideouts.includes(2) }">2</div>
      <div @click='onClick(3)' class="grid-item" :class="{ wrong: wrong.includes(3), correct: hideouts.includes(3) }">3</div>
      <div @click='onClick(4)' class="grid-item" :class="{ wrong: wrong.includes(4), correct: hideouts.includes(4) }">4</div>
      <div @click='onClick(5)' class="grid-item" :class="{ wrong: wrong.includes(5), correct: hideouts.includes(5) }">5</div>
      <div @click='onClick(6)' class="grid-item" :class="{ wrong: wrong.includes(6), correct: hideouts.includes(6) }">6</div>
      <div @click='onClick(7)' class="grid-item" :class="{ wrong: wrong.includes(7), correct: hideouts.includes(7) }">7</div>
      <div @click='onClick(8)' class="grid-item" :class="{ wrong: wrong.includes(8), correct: hideouts.includes(8) }">8</div>
      <div @click='onClick(9)' class="grid-item" :class="{ wrong: wrong.includes(9), correct: hideouts.includes(9) }">9</div>
      <div @click='onClick(10)' class="grid-item" :class="{ wrong: wrong.includes(10), correct: hideouts.includes(10) }">10</div>
      <div @click='onClick(11)' class="grid-item" :class="{ wrong: wrong.includes(11), correct: hideouts.includes(11) }">11</div>
      <div @click='onClick(12)' class="grid-item" :class="{ wrong: wrong.includes(12), correct: hideouts.includes(12) }">12</div>
      <div @click='onClick(13)' class="grid-item" :class="{ wrong: wrong.includes(13), correct: hideouts.includes(13) }">13</div>
      <div @click='onClick(14)' class="grid-item" :class="{ wrong: wrong.includes(14), correct: hideouts.includes(14) }">14</div>
      <div @click='onClick(15)' class="grid-item" :class="{ wrong: wrong.includes(15), correct: hideouts.includes(15) }">15</div>
      <div @click='onClick(16)' class="grid-item" :class="{ wrong: wrong.includes(16), correct: hideouts.includes(16) }">16</div>
      <div @click='onClick(17)' class="grid-item" :class="{ wrong: wrong.includes(17), correct: hideouts.includes(17) }">17</div>
      <div @click='onClick(18)' class="grid-item" :class="{ wrong: wrong.includes(18), correct: hideouts.includes(18) }">18</div>
      <div @click='onClick(19)' class="grid-item" :class="{ wrong: wrong.includes(19), correct: hideouts.includes(19) }">19</div>
      <div @click='onClick(20)' class="grid-item" :class="{ wrong: wrong.includes(20), correct: hideouts.includes(20) }">20</div>
      <div @click='onClick(21)' class="grid-item" :class="{ wrong: wrong.includes(21), correct: hideouts.includes(21) }">21</div>
      <div @click='onClick(22)' class="grid-item" :class="{ wrong: wrong.includes(22), correct: hideouts.includes(22) }">22</div>
      <div @click='onClick(23)' class="grid-item" :class="{ wrong: wrong.includes(23), correct: hideouts.includes(23) }">23</div>
      <div @click='onClick(24)' class="grid-item" :class="{ wrong: wrong.includes(24), correct: hideouts.includes(24) }">24</div>
      <div @click='onClick(25)' class="grid-item" :class="{ wrong: wrong.includes(25), correct: hideouts.includes(25) }">25</div>
      <div @click='onClick(26)' class="grid-item" :class="{ wrong: wrong.includes(26), correct: hideouts.includes(26) }">26</div>
      <div @click='onClick(27)' class="grid-item" :class="{ wrong: wrong.includes(27), correct: hideouts.includes(27) }">27</div>
      <div @click='onClick(28)' class="grid-item" :class="{ wrong: wrong.includes(28), correct: hideouts.includes(28) }">28</div>
      <div @click='onClick(29)' class="grid-item" :class="{ wrong: wrong.includes(29), correct: hideouts.includes(29) }">29</div>
      <div @click='onClick(30)' class="grid-item" :class="{ wrong: wrong.includes(30), correct: hideouts.includes(30) }">30</div>
      <div @click='onClick(31)' class="grid-item" :class="{ wrong: wrong.includes(31), correct: hideouts.includes(31) }">31</div>
      <div @click='onClick(32)' class="grid-item" :class="{ wrong: wrong.includes(32), correct: hideouts.includes(32) }">32</div>
      <div @click='onClick(33)' class="grid-item" :class="{ wrong: wrong.includes(33), correct: hideouts.includes(33) }">33</div>
      <div @click='onClick(34)' class="grid-item" :class="{ wrong: wrong.includes(34), correct: hideouts.includes(34) }">34</div>
      <div @click='onClick(35)' class="grid-item" :class="{ wrong: wrong.includes(35), correct: hideouts.includes(35) }">35</div>
      <div @click='onClick(36)' class="grid-item" :class="{ wrong: wrong.includes(36), correct: hideouts.includes(36) }">36</div>
      <div @click='onClick(37)' class="grid-item" :class="{ wrong: wrong.includes(37), correct: hideouts.includes(37) }">37</div>
      <div @click='onClick(38)' class="grid-item" :class="{ wrong: wrong.includes(38), correct: hideouts.includes(38) }">38</div>
      <div @click='onClick(39)' class="grid-item" :class="{ wrong: wrong.includes(39), correct: hideouts.includes(39) }">39</div>
      <div @click='onClick(40)' class="grid-item" :class="{ wrong: wrong.includes(40), correct: hideouts.includes(40) }">40</div>
      <div @click='onClick(41)' class="grid-item" :class="{ wrong: wrong.includes(41), correct: hideouts.includes(41) }">41</div>
      <div @click='onClick(42)' class="grid-item" :class="{ wrong: wrong.includes(42), correct: hideouts.includes(42) }">42</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detectiveGrid',
  props: ['hideouts', 'guesses', 'onClick'],
  computed: {
    wrong: function () {
      return this.guesses.filter( number => {
        return !this.hideouts.includes(number)
      })
    },
  }
}
</script>

<style lang="css" scoped>

.grid-container {
  display: grid;
  justify-content: center;
  grid-template-columns: 50px 50px 50px 50px 50px 50px 50px;
  padding: 10px;
}

.grid-item {
  height: 45px;
  width: 45px;
  border: 1px solid black;
  margin-right: 10px;
  margin-bottom: 2px;
  text-align: center;
  font-family: "Staatliches", Times, serif;
  font-size: 12px;
  cursor: pointer;
}

.wrong {
  background-color: #FFB8B8;
}

.correct {
  background-color: #B8FFB9
}
</style>
