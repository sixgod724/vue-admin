<template>
  <el-main class="app-main">
    <breadcrumb />
    <transition name="slide-fade">
      <router-view :key="key" class="page-component-wrap" />
    </transition>
  </el-main>
</template>

<script>
import breadcrumb from '@/components/Breadcrumb/index';
export default {
  components: {
    breadcrumb
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
.slide-fade-enter-active {
  transition: all 0.6s;
}
.slide-fade-leave-active {
  // transition: all .3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-5px);
  opacity: 0;
}
</style>
