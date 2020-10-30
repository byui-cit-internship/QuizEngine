<template>
    <div id="1">
        <div v-bind:key="question.id" v-for="question in questions" id="2">
            <!-- Format the Question here -->
            <div v-bind:key="answer.id" v-for="answer in question.answers" id="3">
                <!-- Format the Answer here -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "QuestionFormList",
    components: {
    },
    props: ["questions"]
}
</script>