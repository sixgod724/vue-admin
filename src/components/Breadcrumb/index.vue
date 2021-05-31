<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in levelList">
      {{item.meta.title}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route(route){
      // if(route.)
      this.getBreadcrumb();
    }
  },
  mounted() {
    // this.getBreadcrumb();
  },
  methods:{
    getBreadcrumb(){
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
      const first = matched[0];

      if(!this.isDashboard(first)){
        matched = [{parh: '/dashboard',meta: {title: 'Dashboard'}}].concat(matched)
      }
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);

      console.log(this.levelList);
    },
    isDashboard(route) {
      const name = route && route.name;
      if(!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
    }
  }
};
</script>

<style scoped></style>
