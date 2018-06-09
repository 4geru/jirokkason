<template>
  <div>
    <img class="vending" src="/ticket_vending_machine.jpg" />
    <button @click="getItem()">購入する</button>

    <div class="result">
      <ul>
        <li class="name">{{name}}</li>
        <li class="menu">{{menu}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'hoge',
        menu: 'fuga'
      }
    },
    methods: {
      getItem: () => {
        self = this
        self.name = 'foo'
        self.menu = 'bar'

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
