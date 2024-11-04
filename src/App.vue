<template>
  <div>hello world</div>
  <PropPassing
    :tasks="tasks"
    :mainTitle="mainTitle"
    @changeStatus="handleStatus"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PropPassing from '@/components/ts-components/PropPassing.vue'

interface Task {
  id: string
  title: string
  completed: boolean
}
// const mainTitle: string = ref('Learning TypeScript')
const tasks = ref<Task[]>([
  { id: '1', title: 'Learn Vue with TypeScript', completed: false },
  { id: '2', title: 'Build a Vue project', completed: true },
  { id: '3', title: 'Deploty the project', completed: true },
])

function handleStatus(id: string) {
  const task = tasks.value.find(task => task.id === id)
  if (task) {
    task.completed = !task.completed
  }
}
</script>
