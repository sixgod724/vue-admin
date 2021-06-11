<template>
  <el-menu
    :router="true"
    class="el-menu-vertical-demo"
    :collapse-transition="true"
    :default-active="$route.path"
    :collapse="$store.state.isCollapse"
  >
    <el-menu-item index="/dashboard">
      <i class="el-icon-s-home"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-time"></i>
        <span slot="title">项目管理</span>
      </template>
      <el-menu-item index="/manage/details/1">
        <template slot="title">
          <i class="el-icon-right"></i>
          <span slot="title">首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/manage/user">
        <template slot="title">
          <i class="el-icon-right"></i>
          <span slot="title">关于作者</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/manage/meeting">
        <template slot="title">
          <i class="el-icon-right"></i>
          <span slot="title">会议系统</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-s-data"></i>
      <span slot="title">图表</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import constantRoutes from '@/store/modules/permission';
export default {
  data() {
    return {
    };
  },
  mounted() {
  }
};
</script>

<style scoped></style>
