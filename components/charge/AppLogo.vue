<template>
  <div class="ChargeView">
    <div class="display">
      {{count}}
    </div>
      <div class="mashi-01 mashi">ﾏｼﾏｼ...</div>
      <div class="mashi-02 mashi">ﾏｼﾏｼ...</div>
      <div v-on:click="incliment()">
        <img class="charge-image" src="~assets/image.jpg">
      </div>
      <div class="mashi-03 mashi">ﾏｼﾏｼ...</div>
      <div class="mashi-04 mashi">ﾏｼﾏｼ...</div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    incliment: function (event) {      
      self = this
      const image = document.getElementsByClassName('charge-image')[0]
      image.classList.add("charge-image-up")
      const mashis = document.getElementsByClassName('mashi')
      const word = mashis[self.getRandomInt(mashis.length)]
      word.style.display="block"
      self.count += 1

      setTimeout(function(){
        image.classList.remove("charge-image-up")    
      }, 1);
      setTimeout(function(){
        word.style.display="none"
      }, 100);
    }, 
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
}
</script>

<style>
img{
  z-index: -2;
  width: 250px;
}
</style>

<!-- begin animation style -->
<style>
.charge-image-up{
  top:-10px;
}
.charge-image{
  position:relative;
}
.mashi-01{
  position:absolute;
  left:30px;
}
.mashi-02{
  position:absolute;
  right:30px;
}
.mashi-03{
  position:absolute;
  left:30px;
}
.mashi-04{
  position:absolute;
  right:30px;
}
.mashi {
  display: none;
  font-size: 20px;
  float: left;
}
</style>
<!-- end animation style -->
