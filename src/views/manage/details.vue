<template>
  <div class="indexs">
    <div>111</div>
    <div id="monthorder" style="width:100%;height:300px"></div>
  </div>
</template>
<script>
var echarts = require('echarts/lib/echarts');
export default {
  name: 'indexss',
  data() {
    return {};
  },
  created() {
    setTimeout(() => {
      this.$nextTick(function() {
        this.montheahcrt();
      });
    },100)
  },
  mounted() {

  },
  methods: {
    montheahcrt() {
      var myechart = echarts.init(document.getElementById('monthorder'));
      window.onresize = () => {
        myechart.resize();
      }
      myechart.setOption({
        title: {
          text: '世界人口总量',
          subtext: '数据来自网络'
        },
        color: ['#00acee', '#3bc6d0', '#f6886d', '#ffcc00'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: [20, 15, '系列3']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['非业主增值', '社区增值', '基础物业', '收入合计']
        },
        series: [
          {
            name: '温度',
            type: 'bar',
            itemStyle: {
              normal: {
                //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                color: function(params) {
                  // build a color map as your need.
                  // 在这里面写好函数 根据条件返回对应的颜色就可以
                  var colorList = [
                    '#00acee',
                    '#3bc6d0',
                    '#f6886d',
                    '#ffcc00',
                    '#27727B',
                    '#FE8463',
                    '#9BCA63',
                    '#FAD860',
                    '#F3A43B',
                    '#60C0DD',
                    '#D7504B',
                    '#C6E579',
                    '#F4E001',
                    '#F0805A',
                    '#26C0C0'
                  ];
                  return colorList[params.dataIndex];
                }, //以下为是否显示，显示位置和显示格式的设置了
                label: {
                  show: true,
                  position: ['50%', '30%'],
                  formatter: '{b} {c}'
                }
              }
            },
            //设置柱的宽度，要是数据太少，柱子太宽不美观~
            barWidth: 30,
            data: [28, 15, 9, 4, 7, 8, 23, 11, 17]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.indexs {
  width: 100%;
}
</style>
