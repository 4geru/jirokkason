<template>
  <div class="ChargeView">
    <div class="indicator">
      {{count}} マシ
    </div>
    <div class="charge-image" v-on:click="incliment()">
      <div class="mashi-01 mashi">ﾏｼﾏｼ...</div>
      <div class="mashi-02 mashi">ﾏｼﾏｼ...</div>
      <div class="imageContainer"><img src="~assets/image.jpg"></div>
      <div class="mashi-03 mashi">ﾏｼﾏｼ...</div>
      <div class="mashi-04 mashi">ﾏｼﾏｼ...</div>
    </div>
    <div class="chargeDiscription">ラーメンをタップしてマシマシになろう！！！</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    incliment: function(event) {
      self = this;
      const image = document.getElementsByClassName("charge-image")[0];
      image.classList.add("charge-image-up");
      const mashis = document.getElementsByClassName("mashi");
      const word = mashis[self.getRandomInt(mashis.length)];
      word.style.display = "block";
      self.count += 1;

      setTimeout(function() {
        image.classList.remove("charge-image-up");
      }, 1);
      setTimeout(function() {
        word.style.display = "none";
      }, 100);
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
};
</script>

<!-- begin animation style -->
<style>
.ChargeView {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.indicator {
  color: red;
  position: absolute;
  top: 120px;
  right: 80px;
}
.chargeDiscription {
  position: absolute;
  bottom: 20vh;
  color: red;
}
.imageContainer {
  background-color: blue;
  width: 100%;
  height: 200px;
}
img {
  width: auto;
  height: 100%;
}
.charge-image-up {
  top: -10px;
}
.charge-image {
  position: relative;
  width: 180px;
}
.mashi-01 {
  position: absolute;
  left: 10px;
}
.mashi-02 {
  position: absolute;
  left: 120px;
}
.mashi-03 {
  position: absolute;
  bottom: 0px;
  left: 10px;
}
.mashi-04 {
  position: absolute;
  bottom: 0px;
  left: 120px;
}
.mashi {
  display: none;
}
</style>
<!-- end animation style -->
