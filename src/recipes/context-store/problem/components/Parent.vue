<!-- outer parent with modal button -->
<template>
    <button @click="showModal = !showModal">Show modal</button>
    <Modal v-if="showModal" :items="items" @addItem="items.push($event)" @removeItem="onRemoveItem" @close="showModal = false"></Modal>
    <div>I am holding {{ items.length }} items.</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Modal from "./Modal.vue"

const items = ref([])
const showModal = ref(false)

function onRemoveItem(removedItem) {
    const copy = [...items.value]
    const index = items.value.findIndex(item => item === removedItem)
    copy.splice(index, 1)
    items.value = copy
}
</script>
