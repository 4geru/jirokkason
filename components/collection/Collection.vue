<template>
  <div class="container">
    <ul>
      <li v-for="{id, name, menu, img} in $store.state.collection" :key="id" class="item">
        <p>{{name}}</p>
        <p>{{menu}}</p>
        <img v-bind:src="img"/>
      </li>
    </ul>
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
  }
}
</script>