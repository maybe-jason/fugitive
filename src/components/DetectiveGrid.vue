<template>
  <div>
    <div class="grid-container">
      <div @click='onClick(1)' class="grid-item">1</div>
      <div @click='onClick(2)' class="grid-item">2</div>
      <div @click='onClick(3)' class="grid-item">3</div>
      <div @click='onClick(4)' class="grid-item">4</div>
      <div @click='onClick(5)' class="grid-item">5</div>
      <div @click='onClick(6)' class="grid-item">6</div>
      <div @click='onClick(7)' class="grid-item">7</div>
      <div @click='onClick(8)' class="grid-item">8</div>
      <div @click='onClick(9)' class="grid-item">9</div>
      <div @click='onClick(10)' class="grid-item">10</div>
      <div @click='onClick(11)' class="grid-item">11</div>
      <div @click='onClick(12)' class="grid-item">12</div>
      <div @click='onClick(13)' class="grid-item">13</div>
      <div @click='onClick(14)' class="grid-item">14</div>
      <div @click='onClick(15)' class="grid-item">15</div>
      <div @click='onClick(16)' class="grid-item">16</div>
      <div @click='onClick(17)' class="grid-item">17</div>
      <div @click='onClick(18)' class="grid-item">18</div>
      <div @click='onClick(19)' class="grid-item">19</div>
      <div @click='onClick(20)' class="grid-item">20</div>
      <div @click='onClick(21)' class="grid-item">21</div>
      <div @click='onClick(22)' class="grid-item">22</div>
      <div @click='onClick(23)' class="grid-item">23</div>
      <div @click='onClick(24)' class="grid-item">24</div>
      <div @click='onClick(25)' class="grid-item">25</div>
      <div @click='onClick(26)' class="grid-item">26</div>
      <div @click='onClick(27)' class="grid-item">27</div>
      <div @click='onClick(28)' class="grid-item">28</div>
      <div @click='onClick(29)' class="grid-item">29</div>
      <div @click='onClick(30)' class="grid-item">30</div>
      <div @click='onClick(31)' class="grid-item">31</div>
      <div @click='onClick(32)' class="grid-item">32</div>
      <div @click='onClick(33)' class="grid-item">33</div>
      <div @click='onClick(34)' class="grid-item">34</div>
      <div @click='onClick(35)' class="grid-item">35</div>
      <div @click='onClick(36)' class="grid-item">36</div>
      <div @click='onClick(37)' class="grid-item">37</div>
      <div @click='onClick(38)' class="grid-item">38</div>
      <div @click='onClick(39)' class="grid-item">39</div>
      <div @click='onClick(40)' class="grid-item">40</div>
      <div @click='onClick(41)' class="grid-item">41</div>
      <div @click='onClick(42)' class="grid-item">42</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detectiveGrid',
  props: ['hideouts', 'guesses', 'onClick']
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
}
</style>
