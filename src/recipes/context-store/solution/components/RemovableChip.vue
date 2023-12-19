<template>
    <li>{{ value }}<button @click="store.removeItem(value)">x</button></li>
</template>

<script setup lang="ts">
import { useContextStore } from "../composables/useContextStore.ts"
import { computed } from "vue"

const props = defineProps<{ id: number }>()

const store = useContextStore()

const value = computed(() => store.items[props.id])
</script>
