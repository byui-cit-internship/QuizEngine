<template>
    <v-btn v-text="answerLetter + answerLetterSpace + answer.body">
        <!-- <v-card-title v-text="answer.body"/> -->
    </v-btn>
</template>

<script>
export default {
  name: 'AnswerItem',
  props: {
    answer: {
      type: Object,
      default(){
        return{id:0, body:"This is a test answer and should not appear"}
        },
   },
   answerLetter: {
     type: String,
     default(){
       return 'A'
     }
   },
    answerLetterSpace: {
     type: String,
     default(){
       return '. '
     }
   },
  }
}
</script>