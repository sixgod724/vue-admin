<template>
  <div>
    <div
      @mousemove="move"
      @mouseleave="leave"
      ref="card"
      class="user-img">
        <img src="@/assets/user.jpg" />
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    move() {
      const card = this.$refs.card;
      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 10}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -10}deg)`;
      card.style.transform = `perspective(500px) ${rotY} ${rotX}`;
    },
    leave() {
      const card = this.$refs.card;
      card.style.transform = `perspective(500px) scale(1)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.user-img {
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  margin: 50px auto;
  box-shadow: 0 0 10px #ccc;
  img {
    width: 100%;
  }
}
</style>
