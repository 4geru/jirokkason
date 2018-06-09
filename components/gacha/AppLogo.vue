<template>
  <div class="main">
    <h1>
      ラーメンを購入
    </h1>

    <img class="vending" src="/ticket_vending_machine.jpg" />
    <div @click="getItem()">
      <img src="~assets/purchase.png" alt="">
    </div>
    <p>のこり{{ $store.state.counter }} マシマシ</p>
    <p>10マシマシ消費します</p>

    <div class="result" v-if="result" @click="closeResult()">
      <h1>GET</h1>
      <div class="result-item">
        <p class="name">{{ramen["name"]}}</p>
        <p class="menu">{{ramen["menu"]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      ramen: {
        name: null,
        menu: null
      },
      result: false
    }
  },
  methods: {
    closeResult: function() {
      self.result = false
    },
    getItem: function() {
        self = this
        fetch('https://api.myjson.com/bins/d3xia')
          .then(data => data.json())
          .then(data => {
            const ramen = data[Math.floor(Math.random() * data.length)]
            ramen.menu = 'ラーメン'
            console.log(ramen)
            self.name = ramen.name
            self.ramen = ramen
            self.result = true

            self.$store.commit('decrement')
            self.$store.commit('addCollection', ramen)
          })
      }
  }
}
</script>

<style>
.main {
  padding: 10px;
  text-align: center;
  position: relative;
}

ul {
  list-style: none;
}

button {
  background: rgba(255, 255, 0);
}

.result {
  top: 0px;
  left: 0ppx;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.8);
  justify-content: center;

  color: rgba(200, 200, 200, 1);
}

.result h1{
 font-size: 40pt;
}

.result-item {
  margin-top: 10px;
}

.vending {
  margin: 30px;
  height: 60%;
  width: auto;
}
</style>
