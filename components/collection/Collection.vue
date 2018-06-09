<template>
  <div class="container">
    <ul>
      <li v-for="{id, name, menu, img, ref} in $store.state.collection" :key="id" class="item">
        <img v-bind:src="img"/>
        <p><a v-bind:href="ref">{{name}} / {{menu}}</a></p>
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