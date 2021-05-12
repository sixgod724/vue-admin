<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
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

<style>

</style>
