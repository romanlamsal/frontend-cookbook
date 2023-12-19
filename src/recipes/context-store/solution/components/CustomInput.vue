<template>
    <form @submit.prevent="onSubmit">
        <input v-model="inputValue" />
        <button type="submit">Add</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useContextStore } from "../composables/useContextStore.ts"

const store = useContextStore()

const inputValue = ref("")

const onSubmit = () => {
    store.addItem(inputValue.value)
    inputValue.value = ""
}
</script>
