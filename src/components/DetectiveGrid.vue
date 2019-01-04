<template>
  <div>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item">9</div>
      <div class="grid-item">10</div>
      <div class="grid-item">11</div>
      <div class="grid-item">12</div>
      <div class="grid-item">13</div>
      <div class="grid-item">14</div>
      <div class="grid-item">15</div>
      <div class="grid-item">16</div>
      <div class="grid-item">17</div>
      <div class="grid-item">18</div>
      <div class="grid-item">19</div>
      <div class="grid-item">20</div>
      <div class="grid-item">21</div>
      <div class="grid-item">22</div>
      <div class="grid-item">23</div>
      <div class="grid-item">24</div>
      <div class="grid-item">25</div>
      <div class="grid-item">26</div>
      <div class="grid-item">27</div>
      <div class="grid-item">28</div>
      <div class="grid-item">29</div>
      <div class="grid-item">30</div>
      <div class="grid-item">31</div>
      <div class="grid-item">32</div>
      <div class="grid-item">33</div>
      <div class="grid-item">34</div>
      <div class="grid-item">35</div>
      <div class="grid-item">36</div>
      <div class="grid-item">37</div>
      <div class="grid-item">38</div>
      <div class="grid-item">39</div>
      <div class="grid-item">40</div>
      <div class="grid-item">41</div>
      <div class="grid-item">42</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detectiveGrid',
  props: ['hideouts', 'guesses']
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
