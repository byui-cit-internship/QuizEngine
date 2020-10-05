<template>
  <v-app>
    <Navbar />
    <v-main>
      <!-- <HelloWorld /> -->
      <QuizList />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Navbar from "./components/NavBar";
import QuizList from "./components/QuizList";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Navbar,
    QuizList,
  },

  data: () => ({
    //
  }),
};
</script>
