<template>
  <div id="app">
    <!-- <AddTodo v-on:add-todo="addTodo" /> -->
    <QuestionFormList v-bind:questions="questions" /><!--v-on:del-todo="deleteTodo" -->
  </div>
</template>

<script>
import QuestionFormList from './QuestionFormList';
// import AddTodo from '../components/AddTodo';
// import axios from 'axios';

export default {
  name: 'Home',
  components: {
    QuestionFormList
  },
  data() {
    return {
        id: 0,
        title: "Quiz #1",
        description: "This is a test quiz object and should not appear",
        author: {
            user_id: 0,
            first: "Austin",
            last: "Benitez"
        },
        creation_date: "10/20/2020 10:33:48",
        last_edited: "10/21/2020 10:33:48",
        last_edited_by: {
            user_id: 0
        },
        questions: [
            {
                id: 0,
                body: "This is a test Question 1 and should not appear",
                answers: [
                    {
                        id: 0,
                        body: "q Test Answer 1"
                    },
                    {
                        id: 1,
                        body: "q Test Answer 2"
                    },
                    {
                        id: 2,
                        body: "q Test Answer 3"
                    }
                ],
                correctAnswers: [
                    1
                ],
                subjects: [
                    "Software Engineering"
                ]
            },
            {
                id: 1,
                body: "This is a test Question 2 and should not appear",
                answers: [
                    {
                        id: 4,
                        body: "q Long Test Answer, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    },
                    {
                        id: 5,
                        body: "q Medium Test Answer, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    },
                    {
                        id: 6,
                        body: "q Short Test Answer 6"
                    }
                ],
                correctAnswers: [
                    4
                ],
                subjects: [
                    "Software Engineering"
                ]
            }
        ],
        subjects: [
            "Data Science",
            "Software Engineering"
        ],
        class: {
            course: "CIT380",
            courseId: "001CIT380",
            instructorId: 101,
            section: "001"
        },
        difficulty: "Easy"
    }
  },
  methods: {
    // deleteTodo(id) {
    //   axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    //   .then(res => {this.todos = this.todos.filter(todo => todo.id !== id); return res;})
    //   .catch(err => console.log(err));
    // },
    // addTodo(newTodo) {
    //   const {title, completed} = newTodo;

    //   axios.post('https://jsonplaceholder.typicode.com/todos', {
    //     title,
    //     completed
    //   })
    //   .then(res => this.todos = [...this.todos, res.data])
    //   .catch(err => console.log(err));
    // },
    // created() {
    //   // currently does not work (replace with your request)
    //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //   .then(res => this.todos = res.data)
    //   .catch(err => console.log(err));
    // }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
