<template>
  <el-container style="height: 100%;">
    <el-aside style="width: auto;">
      <el-menu
        :router="true"
        class="el-menu-vertical-demo"
        :collapse-transition="true"
        :default-active="$route.path"
        :collapse="$store.state.isCollapse">
        <el-menu-item index="/dashboard">
          <i class="el-icon-s-home"></i>
          <span slot="title">主页</span>
        </el-menu-item>
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
      <app-head />
      <app-main />
      <el-footer style="background: none;">Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import AppMain from './components/AppMain';
import AppHead from './components/APPHead'
export default {
  components: {
    AppMain,
    AppHead
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
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
/deep/ .el-menu-item,/deep/ .el-submenu__title{
  height: 42px;
  line-height: 42px;
}
 /deep/ .el-submenu__title{
   &:hover{
     background-color:transparent;
   }
 }
/deep/.el-menu-item, /deep/ .el-menu-item{
  &:hover{
    background-color:transparent;
  }
}
</style>
