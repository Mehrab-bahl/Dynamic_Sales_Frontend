<template>
  <div class="flex items-center justify-center w-full">
    <div :class="[isCollapsed ? '' : 'mr-3']">
      <img src="../assets/bahl-logo.png" alt="logo" class="object-contain" :class="image" />
    </div>
    <template v-if="!isCollapsed">
      <div class="h-16 border-l mr-3 relative -left-1 border-primary" :class="dividerHeight"></div>
      <div class="relative top-1 -left-1">
        <h1 class="leading-tight font-bold text-primary" :class="mainText">Dynamic</h1>
        <h2 class="font-medium text-primary" :class="subText">Sales</h2>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  main: {
    type: Boolean,
    default: true,
  },
  isCollapsed: {
    type: Boolean,
    default: false,
  },
});

const mainText = computed(() => {
  return props.main ? 'text-2xl' : 'text-xl';
});

const subText = computed(() => {
  return props.main ? 'text-lg' : 'text-md';
});

const dividerHeight = computed(() => {
  return props.main ? 'h-16' : 'h-14';
});

const image = computed(() => {
  return props.main
    ? 'w-24 h-24'
    : props.isCollapsed
      ? 'w-[55px] h-[55px]'
      : 'w-[80px] h-[80px]';
});
</script>
