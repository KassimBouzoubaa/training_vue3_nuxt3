<template>
  <h2
    class="mt-[15px] text-center font-bold md:text-[44px] text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
  >
    {{ props.titre }}
  </h2>
</template>

<script lang="ts" setup>
import { stringLiteral } from "@babel/types";

const props = defineProps({
  titre: String,
});
</script>
