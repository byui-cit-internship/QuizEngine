<template>
    <v-container fluid style="text-align:left">
        <ChartContainer></ChartContainer>
    </v-container>
</template>

<script>
import ChartContainer from "./ChartContainer"
export default {
    name:"StudyBook",
    components: { ChartContainer },
    data:() => ({
        //routing
        chartTitle: "Test Chart",
    })
};
</script>