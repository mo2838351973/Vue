<template>
  <div>
    <p>Technology sharing topic</p>
    <div style="width:500px;height:500px" ref="chart"></div>
  </div>
</template>

<script>
export default {
  name: "themes",
  props: [],
  mounted() {
    this.$nextTick(_ => {
      // this.initCharts();
      // this.initCharts2()
      // this.initCharts3()
      // this.initCharts4()
      this.initCharts5();
    })
  },
  computed: {},
  methods: {
    initCharts() {
      let myChart = this.$echarts.init(this.$refs.chart); 
      myChart.showLoading();
      setTimeout(_ => {
        myChart.hideLoading();
        // 绘制图表
        myChart.setOption({
          title: { text: "在Vue中使用echarts" },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        });
      },1000)
      
    },
    initCharts2(){
      let myChart = this.$echarts.init(this.$refs.chart, 'light'); 
      myChart.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ]
          }
        ],
        itemStyle: {
          // 阴影的大小
          shadowBlur: 200,
          // 阴影水平方向上的偏移
          shadowOffsetX: 0,
          // 阴影垂直方向上的偏移
          shadowOffsetY: 0,
          // 阴影颜色
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          emphasis: {
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        backgroundColor: '#2c343c',
        textStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        label: {
          normal: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
      })
    },
    initCharts3(){
      let myChart = this.$echarts.init(this.$refs.chart, 'light'); 
      option = null;
      var base = +new Date(2014, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];

      var data = [Math.random() * 150];
      var now = new Date(base);

      function addData(shift) {
          now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
          date.push(now);
          data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

          if (shift) {
              date.shift();
              data.shift();
          }

          now = new Date(+new Date(now) + oneDay);
      }

      for (var i = 1; i < 100; i++) {
          addData();
      }

      let option = {
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: date
          },
          yAxis: {
              boundaryGap: [0, '50%'],
              type: 'value'
          },
          series: [
              {
                  name:'成交',
                  type:'line',
                  smooth:true,
                  symbol: 'none',
                  stack: 'a',
                  areaStyle: {
                      normal: {}
                  },
                  data: data
              }
          ]
      };
      setInterval(function () {
          addData(true);
          console.log(date)
          console.log(data)
          myChart.setOption({
              xAxis: {
                  data: date
              },
              series: [{
                  name:'成交',
                  data: data
              }]
          });
      }, 500);
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    },
    initCharts4() {
      let myChart = this.$echarts.init(this.$refs.chart); 
      // 绘制图表
      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {type: 'category'},
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      }
      myChart.setOption(option);
    },
    initCharts5() {
      let myChart = this.$echarts.init(this.$refs.chart); 
      // 绘制图表
      let option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
            ]
        },
        xAxis: [
            {type: 'category', gridIndex: 0},
            {type: 'category', gridIndex: 1}
        ],
        yAxis: [
            {gridIndex: 0},
            {gridIndex: 1}
        ],
        grid: [
            {bottom: '55%'},
            {top: '55%'}
        ],
        series: [
            // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
        ]
      }
      myChart.setOption(option);
    },
  }
};
</script>

<style lang="stylus" scoped></style>
