<template>
  <div>
    <v-btn v-bind:color="{getColor}" v-bind:class="{getStyle}" v-text="answerLetter + answerLetterSpace + answer.body" name="answerBTN" v-bind:value="answer.id" >
        <!-- <v-card-title v-text="answer.body"/> -->
    </v-btn>
  </div>

</template>

<script>
export default {
  name: 'AnswerItem',
  created: function () {
    //this.$refs.answerbtn.value=this.answer.id
    this.init()
  },
  props: {
    graded: {
      type: Boolean,
      default(){
        return false;
      }
    },
    correct: 
    {
      type: Boolean,
      default(){
        return true
      }
    },
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
      return {
        id: 0,
        ungradedStyle: "text-wrap text-left answer",
        gradedStyle: "text-wrap text-left answer"
      }
   },
   computed: {
     value(){
       return 0
     }
   },
  methods: {
    getColor()
    {
      //colors
      var right = "success"
      var wrong = "incorrect"
      var neutral = "neutral"
      if (this.graded)
      {
        if (this.correct)
        {
          return right
        }
        else
        {
          return wrong
        }
      }
      else
      {
        return neutral
      }
    },
    getStyle()
    {
      return this.ungradedStyle
    },
    init() 
    {
      //this.answerBtn.value = this.answer.id
      //var tagName = this.answer.id + "answer";
      //document.getElementsByTagName("answer")[0].setAttribute("name", tagName)
      //document.getElementsByTagName("answerBTN")[0].setAttribute("value", this.answer.id)
      //var value = answer.id
      console.log("currentId is " + this.answer.id + " " + this.id)

    }
  }
}
</script>
<style>
  .answer
  {
    height:auto;
    width:auto;

  }
</style>