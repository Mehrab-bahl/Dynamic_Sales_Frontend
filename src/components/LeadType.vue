<template>
  <div class="px-4 py-4 bg-white rounded-md shadow-md shadow-slate-200 transition-shadow duration-300"
    :class="{ 'hover:shadow-lg cursor-pointer': isClickable }" @click="handleClick">
    <div class="flex flex-wrap-reverse items-center justify-between">
      <div class="text-3xl font-bold" :class="{ 'text-blue-500 underline': isClickable, 'text-black': !isClickable }">
        {{ paddedCount }}
      </div>
      <font-awesome-icon :icon="icon" class="text-primary text-2xl" />
    </div>

    <div class="mt-3">
      <p class="text-sm font-medium text-gray-700">{{ heading }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  isClickable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const paddedCount = computed(() => {
  return props.count < 10 ? `0${props.count}` : props.count
})

const handleClick = () => {
  if (props.isClickable) {
    emit('click')
  }
}
</script>
