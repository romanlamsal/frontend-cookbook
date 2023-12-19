<template>
  <form @submit.prevent="onSubmit">
    <input v-model="inputValue" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits(["submit"])

const inputValue = ref("")

function onSubmit() {
  emit("submit", inputValue.value)
  inputValue.value = ""
}
</script>
