<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList">
      <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route(route) {
      this.getBreadcrumb();
    }
  },
  mounted() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
      const first = matched[0];
      if (!this.isDashboard(first)) {
        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched);
      }
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
    },
    handleLink(item) {
      const { path } = item;
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}
</style>
