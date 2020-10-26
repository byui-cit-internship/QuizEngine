<template>
  <div class="navbar">
    <v-app-bar app height="75px"  color="primary">
      <v-btn icon class="ml-2" :to="home"  color="neutral">
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-toolbar-title>Quiz Engine</v-toolbar-title>
      <v-spacer />

      <v-btn class="mx-2" color="secondary">Account</v-btn>
      <v-btn>
        <v-icon> mdi-magnify </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data:() => ({
        //routing
        home: "/home",
    })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
