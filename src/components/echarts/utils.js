'use strice';
import echarts from 'echarts';

export function pie(id) {
  let instance = echarts.init(document.getElementById(id));
  let colorList = ['#6481F1', '#4CDA99', '#F0CA00', '#FF7362', '#A689EC', '#12BCE4'];
  instance.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    color: colorList,
    tooltip: {
      show: true,
    },
    legend: {
      show: false
    },
    xAxis: {
      // show: false,
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {
      // show: false
    },

    series: [{
      name: '销量',
      type: 'bar',
      data: [10, 20, 36, 10, 10, 20],
      itemStyle: {
        barBorderRadius: 50
      }
    },{
      name: '背景',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
        barBorderRadius: 50,
        color: 'rgba(118, 111, 111, 0.55)'
      },
    }],
    barWidth: 10
  })
  window.onresize = () => {
    instance.resize();
  }
}
