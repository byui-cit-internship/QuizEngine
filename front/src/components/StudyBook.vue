<template>
    <v-container fluid style="text-align:left">
        <v-card v-text="'subjects:' + this.subjectInfo">
            <v-card-title v-text="this.subjects"></v-card-title>
        </v-card>
        <ChartContainer v-bind:subjects="this.subjectInfo"></ChartContainer>

    </v-container>
</template>

<script>
import ChartContainer from "./ChartContainer";
import subjectData from "../assets/subjectsData.json";
export default {
    name:"StudyBook",
    components: {
         ChartContainer
         },
    data:() => ({
        //routing
        chartTitle: "Test Chart",
        subjectInfo: subjectData,
        showModal:false
    }),
    props:{
        subjects:{
            type: Array,
        },
    },
    methods: {
        setSubjectInfo()
        {
            this.subjects = this.subjectData
            return this.subjects
        },
        created()
        {
            this.setSubjectInfo()
        }
    }
};
</script>