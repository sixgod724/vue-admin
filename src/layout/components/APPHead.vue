<template>
  <el-header class="top-wrap">
    <div class="i-box"><i @click="menuShow" :style="{ transform: $store.state.isCollapse ? 'rotate(0)' : 'rotate(180deg)' }" class="el-icon-s-unfold"></i></div>
    <ul class="nav-bar-nav">
      <li><span @click="we">切换</span></li>
      <li><span>3</span></li>
    </ul>
    <!-- <el-row type="flex">
      <el-col><i @click="menuShow" :style="{ transform: $store.state.isCollapse ? 'rotate(0)' : 'rotate(180deg)' }" class="el-icon-s-unfold"></i></el-col>
      <el-col>
        <el-row type="flex" justify="end">
          <el-col :span="12"><span @click="we">切换</span></el-col>
          <el-col :span="12">3</el-col>
        </el-row>
      </el-col>
    </el-row> -->
  </el-header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    menuShow() {
      this.$store.commit('isCollapseState');
    },
    we() {
      let i18_state = this.$i18n.locale;
      if (i18_state === 'en') {
        this.$i18n.locale = 'cn';
        localStorage.setItem('lang', 'cn');
      } else {
        this.$i18n.locale = 'en';
        localStorage.setItem('lang', 'en');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  color: #6e6b7b;
  background-color: #fff;
  line-height: 60px;
  z-index: 1000;
  box-shadow: 0 0 20px #00000026;
}
.top-wrap {
  display: flex;
  // align-items: center;
  .i-box {
    flex-grow: 1;
  }
  i {
    font-size: 20px;
    color: #6e6b7b;
    flex-grow: 1;
    &:hover {
      cursor: pointer;
      transition: all 0.5s;
    }
  }
  .nav-bar-nav {
    display: flex;
  }
}
</style>
