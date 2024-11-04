<template>
  <h1>{{ mainTitle }}:</h1>
  <ul>
    <li @click="changeStatus(task.id)" v-for="task in tasks" :key="task.id">
      {{ task.title }} <br /><span>{{ task.completed }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Task {
  id: string
  title: string
  completed: boolean
}
const props = withDefaults(
  defineProps<{
    tasks: Task[]
    mainTitle: string
  }>(),
  {
    mainTitle: 'This is the default text',
  },
)

const emits = defineEmits<{ (e: 'changeStatus', id: string): void }>()

function changeStatus(id: string) {
  emits('changeStatus', id)
}
</script>
