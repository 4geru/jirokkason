<template>
  <section class="container">
    <div>
      <h1 class="title">
        ラーメンを購入
      </h1>

      <img class="vending" src="/ticket_vending_machine.jpg" />
      <button @click="getItem()">購入する</button>
   
      <div class="result">
        <ul>
          <li class="name">{{ramen["name"]}}</li>
          <li class="menu">{{ramen["menu"]}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        ramen: {
          name: null,
          menu: null
        }
      }
    },
    methods: {
      getItem: () => {
        self = this
        fetch('https://api.myjson.com/bins/14b84y')
          .then(data => data.json())
          .then(data => {
            const ramen = data[Math.floor(Math.random() * data.length)]
            ramen.menu = 'ラーメン'
            console.log(ramen)
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
