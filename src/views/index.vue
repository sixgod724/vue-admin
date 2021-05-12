<!-- <template>
  <el-container style="height: 100%;">
    <el-aside style="width: auto;">
      <el-menu :router="true" class="el-menu-vertical-demo" :collapse-transition="true" default-active="1" :collapse="isCollapse">
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
          <el-menu-item index="1-2">
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
      <el-main>
        <div class="indexs">
          <router-link to="/login">去登陆</router-link>
          <router-link to="/details/1">去详情</router-link>
          <router-link to="/details/2">去详情</router-link>
          <div id="monthorder" style="width:100%;height:300px"></div>
        </div>
      </el-main>
      <el-footer style="background: none;">Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
var echarts = require('echarts/lib/echarts');
export default {
  name: 'index',
  data() {
    return {
      isCollapse: false
    };
  },
  created() {
    this.$nextTick(function() {
      this.montheahcrt();
    });
  },
  methods: {
    menuShow(){
      this.isCollapse = !this.isCollapse;
    },
    montheahcrt() {
      var myechart = echarts.init(document.getElementById('monthorder'));
      myechart.setOption({
        title: {
          text: '一周网点领解现统计',
          left: 'center',
          top: 2,
          textStyle: {
            fontSize: 20
          }
        },
        color: ['#5b9bd5', '#ed7d31', '#a9d18e', '#ffc000'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '1%',
          bottom: '10%',
          containLabel: true
        },
        legend: {
          left: 'center',
          bottom: '2%',
          data: ['网点领现1', '网点解现2', '网点解现3']
        },
        xAxis: [
          {
            type: 'category',
            data: ['收入', '收入', '收入', '收入', '收入', '收入', '收入'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '销量'
          }
        ],
        series: [
          {
            name: '网点领现1',
            sub: '5+5公司',
            type: 'bar',
            data: [10, 52, 200, 334, 390, 330, 220]
          },
          {
            name: '网点解现2',
            sub: '专业公司',
            type: 'bar',
            data: [20, 62, 300, 434, 490, 430, 320]
          },
          {
            name: '网点解现3',
            sub: '浙大新宇',
            type: 'bar',
            data: [30, 72, 400, 534, 590, 530, 420]
          },
          {
            name: '占比',
            type: 'line',
            smooth: true,
            data: [524.1, 516.0, 522.8, 522.6]
          }
        ]
      });
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
  text-align: center;
  line-height: 160px;
}
.top-wrap i{
  font-size: 20px;
  color: #fff;
  // line-height: 60px;
  &:hover{
    cursor: pointer;
    transition: all .5s;
  }
}
</style>
 -->
<template>
 <div class="indexs">
   <router-link to="/login">去登陆</router-link>
   <router-link to="/details/1">去详情</router-link>
   <router-link to="/details/2">去详情</router-link>
   <div id="monthorder" style="width:100%;height:300px"></div>
 </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
export default {
  name: 'index',
  data() {
    return {};
  },
  created() {
    this.$nextTick(function() {
      this.montheahcrt();
    });
  },
  methods: {
    montheahcrt() {
      var myechart = echarts.init(document.getElementById('monthorder'));
      myechart.setOption({
        title: {
          text: '一周网点领解现统计',
          left: 'center',
          top: 2,
          textStyle: {
            fontSize: 20
          }
        },
        color: ['#5b9bd5', '#ed7d31', '#a9d18e', '#ffc000'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '1%',
          bottom: '10%',
          containLabel: true
        },
        legend: {
          left: 'center',
          bottom: '2%',
          data: ['网点领现1', '网点解现2', '网点解现3']
        },
        xAxis: [
          {
            type: 'category',
            data: ['收入', '收入', '收入', '收入', '收入', '收入', '收入'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '销量'
          }
        ],
        series: [
          {
            name: '网点领现1',
            sub: '5+5公司',
            type: 'bar',
            data: [10, 52, 200, 334, 390, 330, 220]
          },
          {
            name: '网点解现2',
            sub: '专业公司',
            type: 'bar',
            data: [20, 62, 300, 434, 490, 430, 320]
          },
          {
            name: '网点解现3',
            sub: '浙大新宇',
            type: 'bar',
            data: [30, 72, 400, 534, 590, 530, 420]
          },
          {
            name: '占比',
            type: 'line',
            smooth: true,
            data: [524.1, 516.0, 522.8, 522.6]
          }
        ]
      });
    },

  }
};
</script>

<style scoped>

</style>
