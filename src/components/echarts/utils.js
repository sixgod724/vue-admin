'use strice';
import echarts from 'echarts';

export function pie(id, title,xaixs,series,callback) {
  console.log(xaixs);
  let instance = echarts.init(document.getElementById(id));
  let colorList = ['#fdab5d', '#4CDA99', '#F0CA00', '#FF7362', '#A689EC', '#12BCE4'];
  instance.setOption({
    title: {
      text: title
    },
    color: colorList,
    tooltip: {
      show: true,
    },
    legend: {
      // show: false
    },
    xAxis: {
      type: "category",
      data: xaixs
      // show: false,
    },
    yAxis: {
      // show: false
    },
    series:series
    /* series: [{
      name: '销量',
      type: 'bar',
      zlevel: 1,
      data: [1, 2, 3, 4, 5],
      itemStyle: {
        barBorderRadius: 50
      },
      barGap: '-100%',
      barCategoryGap: '74%',
    }, {
      name: '',
      type: 'bar',
      itemStyle: {
        normal: {
          color: 'rgba(243,243,243,0.55)',
          barBorderRadius: 50,
          legend: {
            show: false
          },
        },
      },
      tooltip: {
        show: false
      },
      data: maxArr
    }], */
  })
  instance.on('click', (params) => {
    callback();
  })
  window.onresize = () => {
    instance.resize();
  }
}
