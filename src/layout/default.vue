<template>
  <el-container style="height: 100%;">
    <el-aside style="width: auto;">
      <el-menu
        :router="true"
        class="el-menu-vertical-demo"
        :collapse-transition="true"
        :default-active="$route.path"
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-time"></i>
            <span slot="title">项目管理</span>
          </template>
          <el-menu-item index="/details/1">
            <template slot="title">
              <i class="el-icon-right"></i>
              <span slot="title">首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/index">
            <template slot="title">
              <i class="el-icon-right"></i>
              <span slot="title">首页2</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-s-data"></i>
          <span slot="title">图表</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="top-wrap">
        <el-row type="flex" >
          <el-col :span="5">
            <i
              @click="menuShow"
              :style="{'transform':isCollapse ? 'rotate(0)':'rotate(180deg)'}"
              class="el-icon-s-unfold">
            </i>
          </el-col>
          <el-col :span="19">
            <el-row type="flex" justify="end">
              <el-col :span="2">2</el-col>
              <el-col :span="2">3</el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <app-main />
      <el-footer style="background: none;">Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import AppMain from './components/AppMain';
export default {
  components: {
    AppMain
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    menuShow(){
      this.isCollapse = !this.isCollapse;
    },
  }
};
</script>
<style lang="scss" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-header {
  color: #fff;
  background-color: #8c99e0;
  line-height: 60px;
  z-index: 1000;
  box-shadow: 0 0 20px #00000026;
}

.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  line-height: 80px;
  z-index: 2000;
  box-shadow: 0 0 20px #00000026;
}

.el-main {
  color: #333;
  line-height: 160px;
}
.top-wrap i{
  font-size: 20px;
  color: #fff;
  &:hover{
    cursor: pointer;
    transition: all .5s;
  }
}
</style>
