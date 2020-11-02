<template>
    <v-container fluid style="text-align:left">
        <v-card>
            <v-card-title v-text=chartTitle></v-card-title>
        </v-card>
       <canvas id="chart-canvas" width="400" height="400" ref="chart-canvas"></canvas>
    </v-container>
</template>

<script>

import Chart from "chart.js";
export default {
    name:"ChartTest",
    data:() => ({
        //routing
        chartTitle: "Test Chart",
        ctx: this.$refs["chart-canvas"]
    }),
    mounted(){
        var c = document.getElementById("chart-canvas");
        var ctx = c.getContext("2d");
        this.ctc = ctx;
    },
    methods: {
        generateChart(){
            var ctx = 
            console.log
            var chart = new Chart(ctx, {
                        type: 'horizontalBar',
                        data: {
                            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            datasets: [{
                                label: '# of Votes',
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
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    })
                    return chart;
        },
        init(){
            this.generateChart()
        },
        created(){
            this.init()
        }
    }
};
</script>