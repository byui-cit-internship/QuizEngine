<template>
    <v-container>
        <v-card color="primary">
            <v-card-title v-text="question.body" z-index:4>
            </v-card-title>
        </v-card>
        <v-btn-toggle v-model="answer_toggle" name="btnToggle">
        <v-col>

        <v-row><v-spacer/></v-row>
        <v-card class="answer" v-for="(answer, index) in question.answers" :key="index">
            
            <AnswerItem :graded="graded" v-bind:answer='answer' v-bind:answerLetter='answerLetters[index]' v-bind:value="answer.id">
            </AnswerItem>
            
        </v-card> 
        <v-card>Current Answer Id: {{answer_toggle}}</v-card>

        </v-col>
        </v-btn-toggle>
    </v-container>
</template>

<script>
import AnswerItem from "./AnswerItem";
export default {
   name: 'QuestionItem',
   components: { AnswerItem },
    data: () => ({
     "answerLetters": [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
],
answer_toggle: -1

 }),
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
            }
           },
            },
    graded: {
        type: Boolean,
        default(){
            return false;
        }
    }
},
    // value : {
    //     type: Object,
    //     required: true,
    // },
    // computed: {
    //     answer_toggle: {
    //        type: Number,
    //        get () {
    //            return this.value
    //        },
    //        set(val) {
    //            this.$emit('input', val)
    //        }
    // } 
    // },
    // watch: {
    //     answer_toggle() {
    //         this.$emit("input", this.value)
    //     }
    // },
    methods :{
        resetActiveAnswers()
        {
            this.answer_toggle = -1;
        },
        init()
        {
            //document.getElementsByTagName("btnToggle")[0].setAttribute("value",null)
            this.answer_toggle = -1
        }
    },
    created() {
            this.init()
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