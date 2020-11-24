
<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  name: "TestChart2",
  extends: HorizontalBar,
  data: () => ({
    title: "Chart Title",
    options: {
    type: 'horizontalBar', 
      responsive: true,
      maintainAspectRatio: false,
      scales:{
          xAxes: [{
              stacked:true
          }],
          yAxes: [{
              stacked: true,
              ticks: {
                  mirror: true
              }
          }]
      }
    }
  }),
  props: {
      chartdata: {
          type: Object,
          required: true
      }
  },
  beforeMount()
  {
    this.$emit('update');
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>