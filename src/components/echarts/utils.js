'use strice';
import echarts from 'echarts';

export function pie(id, title, xaixs, series, color, callback) {
  let instance = echarts.init(document.getElementById(id));
  let colorList = color || ['#fdab5d', '#4CDA99', '#F0CA00', '#FF7362', '#A689EC', '#12BCE4'];
  instance.setOption({
    title: {
      text: title
    },
    color: colorList,
    tooltip: {
      show: false,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      show: false
    },
    xAxis: {
      show: false,
      type: "category",
      data: xaixs,
      axisLabel: {
        interval: 0
      }
    },
    yAxis: {
      show: false
    },
    barWidth: 5,
    series: series
  }, true)
  instance.on('click', (params) => {
    callback();
  })
  window.onresize = () => {
    instance.resize();
  }
}
