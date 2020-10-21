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
      path: "/answertest",
      name: "answertest",
      component: () => import("./components/AnswerItem")
    },
    {
      path: "/questiontest",
      name: "qtest",
      component: () => import("./components/QuestionItem")
    },
    {
      path: "/quiz:id",
      name: "quiz",
      component: () => import("./components/Quiz"),
      props: true
    }
  ]
});