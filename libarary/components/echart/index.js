import kindoChart from './src/echart'

kindoChart.install = function(Vue) {
  Vue.component(kindoChart.name, kindoChart)
}

export default kindoChart
