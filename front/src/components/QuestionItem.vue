<template>
    <AnswerItem>
    </AnswerItem>
</template>

<script>
import AnswerItem from "./AnswerItem";
export default {
    name: 'QuestionItem',
  props: {
    question: {
      type: Object,
      default() {
        return {
            "id":0,
            "body":"This is a test Question and should not appear", 
            "answers":[
            {"id":0, "body":"q Test Answer 1"},
            {"id":1, "body":"q Test Answer 2"},
            {"id":2, "body":"q Test Answer 3"},
            ],
            "correctAnswers":[1],
            },
           },
}}}
</script>