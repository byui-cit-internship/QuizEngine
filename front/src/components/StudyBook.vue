<template>
    <v-container fluid style="text-align:left">
        <ChartContainer></ChartContainer>
    </v-container>
</template>

<script>
import ChartContainer from "./ChartContainer";
import subjectData from "../assets/subjectsData.json";
export default {
    name:"StudyBook",
    components: { ChartContainer },
    data:() => ({
        //routing
        chartTitle: "Test Chart",
        subjectInfo: subjectData
    }),
    props:{
        subjects:{
            type: Array,
        },
    },
    methods: {
        setSubjectInfo()
        {
            this.subjects = this.subjectInfo
        },
        created()
        {
            this.setSubjectInfo()
        }
    }
};
</script>