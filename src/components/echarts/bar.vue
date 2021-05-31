<template>
  <div id="monthorder" style="width:100%;height:300px"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    created() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.montheahcrt();
        });
      },100)
    },
    methods: {
      montheahcrt() {
        var myechart = echarts.init(document.getElementById('monthorder'));
        window.onresize = () => {
          myechart.resize();
        }
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
  }
</script>

<style scoped>

</style>
