
<template>
  <li>{{ value }}<button @click="emit('remove')">x</button></li>
</template>

<script setup lang="ts">
defineProps<{ value: string }>()
const emit = defineEmits(["remove"])
</script>