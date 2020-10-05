<template>
  <div class="quizList">
    <!-- <v-card class="mx-auto mt-5" max-width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title> Top western road trips </v-card-title>

      <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card> -->

    <v-card>
      <v-card-title>Select a Subject/Quiz</v-card-title>

      <!-- TODO Show Unique Subjects in Select List -->
      <v-container fluid>
        <v-autocomplete
          v-model="select"
          label="Subjects"
          :items="getUniqueSubjects"
          chips
          deletable-chips
          multiple
        ></v-autocomplete>
      </v-container>

      <!-- TODO Show Filtered Quizzes based on Subject -->
      <v-subheader>Quiz</v-subheader>
      <v-list-item v-for="quiz in quizzes" :key="quiz.id">
        {{ quiz.title }}
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "QuizList",
  data: () => ({
    show: false,
    quizzes: [
      { id: 1, title: "Quiz 1", subject: "Database" },
      { id: 2, title: "Quiz 2", subject: "Database" },
      { id: 3, title: "Quiz 3", subject: "Security" },
      { id: 4, title: "Quiz 4", subject: "Security" },
      { id: 5, title: "Quiz 5", subject: "Software Engineering" },
    ],
    items: ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"],
    value: ["foo", "bar", "fizz"],
  }),
  computed: {
    getUniqueSubjects() {
      let array = this.quizzes.map((a) => a.subject);
      //Only unique values allowed in ES6 Set. Way of filtering out non-unique values
      let uniqueSubjects = Array.from(new Set(array));
      return uniqueSubjects;
    },

    getFilteredQuizzes() {
      // for each quiz in quizzes, if quiz.id is in any of selected subjects array, push quiz.title to selected quizzes array
      // TODO How to handle event of new subject being selected
      this.quizzes.forEach((element) => {
        return element.title;
      });
      let filteredQuizzes = [];
      return filteredQuizzes;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>