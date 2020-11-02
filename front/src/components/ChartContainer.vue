<template>
    <v-container>
        <v-card>
            <v-card-title v-text="title">
            </v-card-title>
        </v-card>
        <TestChart2 v-bind:chartdata="chardata"></TestChart2>
    </v-container>
</template>

<script>
import TestChart2 from "./TestChart2"
export default {
    name: "ChartContainer",
    components: {TestChart2},
    data: () => ({
        chartdata: {
      type: 'horizontalBar',
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Data One',
                      data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
      ]
    }
    }),
    props: {
        title: {
            type: String,
            default() {
                return "Chart Title"
            }
        }
    },
    computed: {
        chardata: {
            get(){
                return this.chartdata
            },
            set(cdata){
                this.chartdata = cdata;
            }
        }
    },
    mounted() {
        
    }
}
</script>