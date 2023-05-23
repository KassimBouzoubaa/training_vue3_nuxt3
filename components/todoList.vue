<template>
  <div class="flex items-center justify-center w-screen h-screen font-medium">
    <div
      class="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100"
    >
      <div class="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
        <div class="flex items-center mb-6">
          <svg
            class="h-8 w-8 text-indigo-500 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h4 class="font-semibold ml-3 text-lg">Todo List</h4>
        </div>
        <ul>
          <TodoItem
            v-for="(todo, index) in todoList"
            :key="index"
            :todo="todo"
            @remove="removeTodo"
          />
        </ul>
        <div class="flex justify-start items-center mt-3">
          <form class="flex w-full">
            <button
              @click.prevent="addTodo"
              id="addTodo"
              class="h-8 px-2 text-sm font-medium rounded"
            >
              <svg
                class="w-5 h-5 text-gray-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <input
              v-model="todo"
              class="flex-grow w-full h-8 ml-4 bg-transparent focus:outline-none font-medium"
              type="text"
              autofocus
              placeholder="Ajouter une nouvelle tâche"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup >
import { ref } from "vue";

const todo = ref("");
const todoList = ref([
  { id: 1, text: "Apprendre le HTML", done: false },
  { id: 2, text: "Apprendre le CSS", done: false },
  { id: 3, text: "Apprendre le JS", done: true },
]);
function addTodo() {
  const newTodo = {
    id: todoList.value.length + 1,
    text: todo.value,
    done: false,
  };
  todoList.value.push(newTodo);
  todo.value = "";
}
function removeTodo(todo: {id: number, text: string, done: boolean}) {
  const index = todoList.value.findIndex((item) => item.id === todo.id);
  todoList.value.splice(index, 1);
}

watchEffect(() => {
  console.log(todo.value)
})
</script>
