import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/quizlist",
      name: "quizlist",
      component: () => import("./components/QuizList")
    },
    {
      path: "/",
      alias: "/home",
      name: "tutorial-home",
      component: () => import("./components/Home")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/HelloWorld")
    }
  ]
});