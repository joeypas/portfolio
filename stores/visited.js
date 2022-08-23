import { defineStore } from 'pinia'
import { ref, watch } from "vue"

export const useVisited = defineStore('main', () => {
    const visited = ref(false)

    if (sessionStorage.getItem("visited")) {
        visited.value = JSON.parse(sessionStorage.getItem("visited"))
    }

    watch(
        visited,
        (visitedVal) => {
            sessionStorage.setItem('visited', JSON.stringify(visitedVal))
        },
        { deep: true }
    )

    function setVal(value) {
        visited.value = value
    }

    return { visited, setVal }
})