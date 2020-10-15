<template>
    <v-btn v-text="answerLetter + answerLetterSpace + answer.body" name="answer" >
        <!-- <v-card-title v-text="answer.body"/> -->
    </v-btn>
</template>

<script>
export default {
  name: 'AnswerItem',
  created: function () {
    this.init()
  },
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
  },
    data: function(){
      this.init()
   },
  methods: {
    init() {
      var tagName = this.answerLetter + "answer";
      document.getElementsByTagName("answer")[0].setAttribute("name", tagName)
      document.getElementsByTagName(tagName)[0].setAttribute("value", this.answer.id)
    }
  }
}
</script>