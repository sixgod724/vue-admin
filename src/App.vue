<template>
  <div id="app" class="h-100">
    <router-view />
    <!-- <component :is="layout">
      <router-view />
    </component> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
       default_layout: 'default',
    }
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || this.default_layout) + '-layout'
    }
  },
};
</script>

<style scoped>
.h-100{
  height: 100%;
}
</style>
