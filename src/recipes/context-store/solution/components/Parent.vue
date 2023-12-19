<!-- outer parent with modal button -->
<template>
    <button @click="showModal = !showModal">Show modal</button>
    <Modal v-if="showModal" @close="showModal = false"></Modal>
    <div>I am holding {{ store.items.length }} items.</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Modal from "./Modal.vue"
import { provideContextStore } from "../composables/useContextStore.ts"

const showModal = ref(false)

const store = provideContextStore()
</script>
