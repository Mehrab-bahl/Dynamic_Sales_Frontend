<template>
  <div ref="notificationContainer"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElNotification } from 'element-plus';

const notificationContainer = ref(null);

const showNotification = (options) => {
  ElNotification({
    ...options,
    appendTo: notificationContainer.value, // Append to the container
  });
};

defineExpose({
  showNotification,
});
</script>
