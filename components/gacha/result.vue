<template>
  <div>
    <h1 class="title">
      ラーメンを購入
    </h1>

    <img class="vending" src="/ticket_vending_machine.jpg" />
    <div @click="getItem()">
      <button>購入する</button>
    </div>

    <div class="result">
      <ul>
        <li class="name">{{ramen["name"]}}</li>
        <li class="menu">{{ramen["menu"]}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: null,
        ramen: {
          name: null,
          menu: null
        }
      }
    },
    methods: {
      getItem: () => {
        console.log(self)
        self = this
        fetch('https://api.myjson.com/bins/14b84y')
          .then(data => data.json())
          .then(data => {
            const ramen = data[Math.floor(Math.random() * data.length)]
            ramen.menu = 'ラーメン'
            console.log(ramen)
            self.name = ramen.name
            self.ramen = ramen
          })
      }
    }
  }
</script>

<style>
.container {
  padding: 10px;
  text-align: center;
}

button {
  background: rgba(255, 255, 0);
}

.vending {
  margin: 30px;
  width: 70%;
}
</style>
