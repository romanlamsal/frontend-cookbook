<!-- modal component -->
<template>
  <dialog open>
    <CustomInput @submit="emit('addItem', $event)" />
    <ul>
      <RemovableChip v-for="item in items" :key="item" :value="item" @remove="emit('removeItem', item)"></RemovableChip>
    </ul>
    <button @click="emit('close')">close</button>
  </dialog>
</template>

<script setup lang="ts">
import RemovableChip from "./RemovableChip.vue";
import CustomInput from "./CustomInput.vue";

defineProps<{
  items: string[]
}>()

const emit = defineEmits(["addItem", "removeItem", "close"] as const)
</script>
