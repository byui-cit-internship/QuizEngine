<template>
    <v-container fluid style="text-align:left">
        <v-row style="height: 25px;">
        </v-row>
        <v-btn x-large height=250 v-text="btn1" block :to="quizlist">
        </v-btn>
        <v-row style="height: 25px;">
        </v-row>
            <v-spacer/>
            <v-divider/>
        <v-btn x-large height=250  v-text="btn2" block :to="helloworld">
        </v-btn>
        <v-row style="height: 25px;">
        </v-row>
            <v-spacer/>
            <v-divider/>
        <v-btn x-large height=250  v-text="btn3" block :to="helloworld">
        </v-btn>
    </v-container>
</template>

<script>
import Chart from "chart.js"
export default {
    name:"Home",
    data:() => ({
        //routing
        chartTitle: "Test Chart"
    })
};
</script>