<template>
  <div class="flex items-center justify-center">
    <label for="date-picker" class="mr-4 font-medium text-gray-700">{{ label }}</label>
    <el-date-picker v-model="selectedDate" type="date" placeholder="Pick a day" :size="size" id="date-picker"
      style="width: 100%" />
    <el-button type="success" size="large" round :icon="Search" class="ml-2" @click="handleSearch">Search</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Select Date:',
  },
  size: {
    type: String,
    default: 'large',
  },
})

const emit = defineEmits(['search'])

const selectedDate = ref(null)

const handleSearch = () => {
  emit('search', selectedDate.value)
}
</script>

<style scoped>
/* Change the text color of the input inside el-date-picker */
:deep(.el-date-editor .el-input__inner) {
  color: rgb(35, 35, 35);
  /* Replace 'red' with your desired color */
}

/* Change the placeholder color */
:deep(.el-date-editor .el-input__inner::placeholder) {
  color: rgb(131, 131, 131);
  /* Replace 'orange' with your desired color */
}
</style>
