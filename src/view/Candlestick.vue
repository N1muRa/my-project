<template>
  <div class='charts' id='chartBox' style="background: #21202D">
    <div id='Candlestick' class='Candlestick'>hello</div>
  </div>
</template>

<script>
export default {
  name: 'candlestick',
  data () {
    return {
      upColor: '#ec0000',
      upBorderColor: '#8A0000',
      downColor: '#00da3c',
      downBorderColor: '#008F28',
      data0: [],
      sampleData: []
    }
  },
  methods: {
    splitData (rawData) {
      let categoryData = []
      let values = []
      for (let i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0])
        values.push(rawData[i])
      }
      return {
        categoryData: categoryData,
        values: values
      }
    },
    calculateMA (dayCount, rawData) {
      let result = []
      if (rawData.values != null) {
        for (let i = 0, len = rawData.values.length; i < len; i++) {
          if (i < dayCount) {
            result.push('-')
            continue
          }
          let sum = 0
          for (let j = 0; j < dayCount; j++) {
            sum += rawData.values[i - j][1]
          }
          result.push(sum / dayCount)
        }
      }
      return result
    }
  },
  created () {},
  mounted () {
    let tmpData = []

    let Candlestick = document.getElementById('Candlestick')

    let candlestick = this.$echarts.init(Candlestick)

    let InitOption = {
      backgroundColor: '#21202D',
      legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
        inactiveColor: '#777',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false,
          type: 'cross',
          lineStyle: {
            color: '#376df4',
            width: 2,
            opacity: 1
          }
        }
      },
      xAxis: {
        type: 'category',
        axisLine: { lineStyle: { color: '#8392A5' } }
      },
      yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: '#8392A5' } },
        splitLine: { show: false }
      },
      grid: {
        bottom: 80
      },
      dataZoom: [{
        textStyle: {
          color: '#8392A5'
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        dataBackground: {
          areaStyle: {
            color: '#8392A5'
          },
          lineStyle: {
            opacity: 0.8,
            color: '#8392A5'
          }
        },
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        start: 50,
        end: 100
      }, {
        type: 'inside',
        start: 50,
        end: 100
      }],
      animation: false,
      series: [
        {
          type: 'candlestick',
          name: '日K',
          itemStyle: {
            normal: {
              color: '#FD1050',
              color0: '#0CF49B',
              borderColor: '#FD1050',
              borderColor0: '#0CF49B'
            }
          },
          markPoint: {
            label: {
              normal: {
                formatter: function (param) {
                  return param != null ? Math.round(param.value) : ''
                }
              }
            },
            data: [
              {
                name: 'XX标点',
                coord: ['2013/5/31', 2300],
                value: 2300,
                itemStyle: {
                  normal: {color: 'rgb(41,60,85)'}
                }
              },
              {
                name: 'highest value',
                type: 'max',
                valueDim: 'highest'
              },
              {
                name: 'lowest value',
                type: 'min',
                valueDim: 'lowest'
              },
              {
                name: 'average value on close',
                type: 'average',
                valueDim: 'close'
              }
            ],
            tooltip: {
              formatter: function (param) {
                return param.name + '<br>' + (param.data.coord || '')
              }
            }
          },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              [
                {
                  name: 'from lowest to highest',
                  type: 'min',
                  valueDim: 'lowest',
                  symbol: 'circle',
                  symbolSize: 10,
                  label: {
                    normal: {show: false},
                    emphasis: {show: false}
                  }
                },
                {
                  type: 'max',
                  valueDim: 'highest',
                  symbol: 'circle',
                  symbolSize: 10,
                  label: {
                    normal: {show: false},
                    emphasis: {show: false}
                  }
                }
              ],
              {
                name: 'min line on close',
                type: 'min',
                valueDim: 'close'
              },
              {
                name: 'max line on close',
                type: 'max',
                valueDim: 'close'
              }
            ]
          }
        },
        {
          name: 'MA5',
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          }
        },
        {
          name: 'MA10',
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          }
        },
        {
          name: 'MA20',
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          }
        },
        {
          name: 'MA30',
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          }
        }
      ]
    }

    candlestick.setOption(InitOption)

    this.$http.get('/api/sample/getSampleData').then((response) => {
      let body = response.body
      for (let i = 0; i < body.length; i++) {
        let sample = []
        sample[0] = body[i].date
        sample[1] = body[i].open
        sample[2] = body[i].close
        sample[3] = body[i].lowest
        sample[4] = body[i].highest
        tmpData[i] = sample
      }
      this.data0 = this.splitData(tmpData)
      console.log(this.data0)

      let showData = {
        xAxis: {
          data: this.data0.categoryData
        },
        series: [
          {
            data: this.data0.values
          },
          {
            data: this.calculateMA(5, this.data0)
          },
          {
            data: this.calculateMA(10, this.data0)
          },
          {
            data: this.calculateMA(20, this.data0)
          },
          {
            data: this.calculateMA(30, this.data0)
          }
        ]
      }

      candlestick.setOption(showData)

      Candlestick.style.height = window.innerHeight * 0.6 + 'px'
      Candlestick.style.width = window.innerWidth + 'px'
      candlestick.resize()
    })
  }
}
</script>

<style scoped>
  .Candlestick{
    width: 1000px;
    height: 500px;
    top: 10%;
    margin-right: 1%;
  }
  .charts{
    height: 100%;
  }
</style>
