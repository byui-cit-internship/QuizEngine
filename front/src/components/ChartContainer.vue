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
      //subjectNames: this.getSubjectNames(),
      //subjectCorrect: this.getSubjectCorrect(),
      chartdata: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Data One',
          data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [

                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [

                'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1
        },
                {
          label: 'Data One',
          data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [

                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [

                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        },
      ]
    },
    chartdata2: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Correct',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [12, 19, 3, 5, 2, 3, 9]
            }, {
                label: 'Incorrect',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [12, 19, 3, 5, 2, 3, 9]
            }]
    }
    }),
    props: {
        title: {
            type: String,
            default() {
                return "Chart Title"
            }
        },
        subjects: {
            type: Array,
            required: true
        }
    },
    computed: {
        chardata: {
            get(){
                return this.chartdata2
            },
            set(cdata){
                this.chartdata2 = cdata;
            }
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        // Returns the number of qs correct for each subject sent into a single array 
        getSubjectCorrect(){
            
        },
        //Returns the number of q's incorrect for each subject sent into a single array
        getSubjectsIncorrect(){

        },
        getSubjectNames(){

        },
        // TODO: write function that: Sets the charts data given an array of subject objects
        setChartData(){

        },
        init()
        {
            this.setChartData()
        }
    }
}
</script>