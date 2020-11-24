<template>
    <v-container>
        <v-card>
            <v-card-title v-text="title">
            </v-card-title>
        </v-card>
        <TestChart2 v-bind:chartdata="chartdata" :key="correctColor" v-on:update="setChartData()"></TestChart2>
        {{correctColor}}
            <v-btn right v-on:click.native="showModal=true">Settings</v-btn>
            <ChartSettings v-show="showModal" medium v-bind:barCorrectColor.sync="correctColor"></ChartSettings>
    </v-container>
</template>
<script>

import TestChart2 from "./TestChart2";
import ChartSettings from "./ChartSettings";
import quizColors from '../assets/quizColors';

export default {
    name: "ChartContainer",
    components: {TestChart2, ChartSettings},
    data: () => ({
      //subjectCorrect: this.getSubjectCorrect(),
      showModal: false,
      subjNames: ["this"],
      subjectCorrect: [],
      subjectTotal: [],
      chartdata: {},
      correctColor: '',
      correctBorder: 'rgba(75, 192, 192, 1)',
      incorrectColor:'rgba(255, 99, 132, 0.2)',
      incorrectBorder:'rgba(255, 99, 132, 1)',
      colorSettings: quizColors
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
        // correctColor: {
        //     type:String
        // }
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
    beforeMount() {
        this.init()
    },
    mounted(){
        this.chartdata = this.setChartData();
    },
    methods: {
        writeSettings()
        {
            console.log("saved: " + this.colorSettings)
        },
        
        reloadCHart()
        {
            console.log("Reloading the chart")
        },
        getChartData()
        {
            return this.chartdata
        },
        loadColorSettings()
        {
            this.correctColor = this.colorSettings.correctColor;
            console.log(this.colorSettings)
            this.correctBorder = this.colorSettings.correctBorder;
            this.incorrectColor = this.colorSettings.incorrectColor;
            this.incorrectBorder = this.colorSettings.incorrectBorder;
        },
        setColorSettings()
        {
            this.colorSettings.correctColor = this.correctColor;
            this.colorSettings.correctBorder = this.correctBorder;
            this.colorSettings.incorrectColor = this.incorrectColor;
            this.colorSettings.incorrectBorder = this.incorrectBorder;
        },
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
            datasets: [
                {
                label: 'Correct',
                backgroundColor: this.correctColor,
                borderColor: this.correctBorder,
                borderWidth: 1,
                data: correct
            }, {
                label: 'Incorrect',
                backgroundColor: this.incorrectColor,
                borderColor: this.incorrectBorder,
                borderWidth: 1,
                data: incorrect
            }],
            labels: this.getSubjectNames(),

    }
            console.log(this.chartdata2)
            console.log("setting correct color in object: " + this.correctColor);
            console.log(this.getSubjectNames())
            this.chartdata = chartData;
            this.setColorSettings();
            this.writeSettings();
            return chartData
        },
        init()
        {
            this.loadColorSettings();
            this.chartdata = this.setChartData()
        }
    }
}
</script>