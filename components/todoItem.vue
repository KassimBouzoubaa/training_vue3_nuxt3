<template>
  <li class="flex items-center justify-between">
    <p
      class="flex items-center w-full h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
      :for="'task_' + todo.id"
      @click="toggleTodo"
    >
      <span
        class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full"
      >
        <svg
          class="w-4 h-4 fill-current hover:bg-green-300 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span :class="{ 'line-through': todo.done }" class="ml-4 text-sm">{{
        todo.text
      }}</span>
    </p>
    <div>
      <svg
        class="hover:cursor-pointer hover:bg-red-300"
        @click="removeTodo"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["remove"]);

const toggleTodo = () => {
  props.todo.done = !props.todo.done;
};

const removeTodo = () => {
  emit("remove", props.todo);
};
</script>
