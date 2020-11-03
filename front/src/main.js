import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import AnswerItem from './components/AnswerItem.vue'
import QuestionItem from './components/QuestionItem.vue'
import QuizListItem from './components/QuizListItem.vue'
import VueModal from "@kouts/vue-modal"
import './assets/main.css'
import "@kouts/vue-modal/dist/vue-modal.css"


Vue.config.productionTip = false
Vue.component('AnswerItem', AnswerItem); 
Vue.component('QuestionItem', QuestionItem); 
Vue.component('QuizListItem', QuizListItem);
Vue.component('Modal', VueModal); 

new Vue({
  vuetify, router,
  render: h => h(App)
}).$mount('#app')
