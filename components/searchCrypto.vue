<template>
  <li
    class="menu-el-js flex items-center px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50"
  >
    <img class="mr-4" :src="crypto.thumb" alt="logoCrypto" />
    <span class="mr-4">{{ crypto.name + " " }}</span>
    ({{ crypto.id }})
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  crypto: {
    type: Object,
    required: true,
  },
});
</script>
