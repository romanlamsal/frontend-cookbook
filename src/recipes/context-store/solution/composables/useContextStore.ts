import { defineStore } from "pinia"
import { inject, provide, ref } from "vue"

const createStore = () =>
    defineStore("context-store", () => {
        const items = ref<string[]>([])

        const addItem = (item: string) => {
            const copy = [...items.value]
            copy.push(item)
            items.value = copy
        }

        const removeItem = (removedItem: string) => {
            const copy = [...items.value]
            const index = items.value.findIndex(item => item === removedItem)
            copy.splice(index, 1)
            items.value = copy
        }

        return {
            items,
            addItem,
            removeItem,
        }
    })()

type Store = ReturnType<typeof createStore>

const contextStoreName = "contextual-store-instance"

export const provideContextStore = () => {
    const store = createStore()
    provide(contextStoreName, store)
    return store
}

export const useContextStore = () => inject<Store>(contextStoreName)!
