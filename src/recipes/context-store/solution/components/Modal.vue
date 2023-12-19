<!-- modal component -->
<template>
    <dialog open>
        <CustomInput />
        <ul>
            <RemovableChip v-for="(_, index) in store.items" :key="index" :id="index"></RemovableChip>
        </ul>
        <button @click="$emit('close')">close</button>
    </dialog>
</template>

<script setup lang="ts">
import RemovableChip from "./RemovableChip.vue"
import CustomInput from "./CustomInput.vue"
import { useContextStore } from "../composables/useContextStore.ts"

const store = useContextStore()
</script>
