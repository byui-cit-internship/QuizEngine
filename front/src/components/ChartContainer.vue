<template>
    <v-container>
        <v-card>
            <v-card-title v-text="title">
            </v-card-title>
        </v-card>
        <TestChart2 v-bind:chartdata="setChartData()"></TestChart2>
    </v-container>
</template>
<script>
import TestChart2 from "./TestChart2"
export default {
    name: "ChartContainer",
    components: {TestChart2},
    data: () => ({
      //subjectCorrect: this.getSubjectCorrect(),
      subjNames: ["this"],
      chartdata: {
      labels: ['"January', 'February', 'March', 'April', 'May', 'June'],
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
        },
        subjectCorrect: {
            type: Array
        },
        subjectTotal: {
            type: Array
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
            let arrayCorrect = this.subjects.map((a) => a.correct);
            this.subjectCorrect = arrayCorrect
            let arrayTotal = this.subjects.map((a) => a.totalTaken);
            this.subjectTotal = arrayTotal;

            //this.subjectNames = array
            return arrayCorrect
        },
        //Returns the number of q's incorrect for each subject sent into a single array
        getSubjectsIncorrect(){
            var arrayIncorrect = [];
            this.subjectCorrect.forEach((element, index) => {
                console.log("Correct:" + element)
                console.log("total: " + this.subjectTotal[index])    
                arrayIncorrect.push(Math.abs(element - this.subjectTotal[index]))
                console.log("incorrect: " + arrayIncorrect[index])
            });
            return arrayIncorrect;
        },
        getSubjectNames(){
            let array = this.subjects.map((a) => a.subject);
            //this.subjectNames = array
            return array
        },
        // TODO: write function that: Sets the charts data given an array of subject objects
        setChartData(){ 
            //this.subjNames = this.getSubjectNames()
            var correct = this.getSubjectCorrect()
            var incorrect = this.getSubjectsIncorrect()
            var chartData = {
            labels: this.getSubjectNames(),
            datasets: [
                {
                label: 'Correct',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: correct
            }, {
                label: 'Incorrect',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: incorrect
            }]
    }
            console.log(this.chartdata2)
            console.log(this.getSubjectNames())
            return chartData
        },
        init()
        {
            this.setChartData()
        }
    }
}
</script>