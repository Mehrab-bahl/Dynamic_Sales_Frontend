<template>
  <header class="bg-white shadow-md shadow-slate-200 sticky top-0 z-50">
    <div class="flex items-center justify-between px-6 py-4">
      <!-- Left Side -->
      <div class="flex items-center space-x-4">
        <button @click="toggleSidebar" class="p-2 hover:bg-gray-100 rounded-lg">
          <font-awesome-icon icon="bars" class="text-black text-lg relative top-0.5" />
        </button>
        <h1 class="text-base font-medium capitalize text-black">{{ currentRouteName }}</h1>
      </div>

      <!-- Right Side -->
      <div class="flex items-center space-x-6">
        <el-dropdown>
          <div class="flex items-center space-x-2 cursor-pointer">
            <el-avatar :size="32" :icon="UserFilled" />
            <span class="text-sm text-gray-700">Basit Khan</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleLogout"><font-awesome-icon icon="power-off"
                  class="mr-2 text-red-600" />Logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { UserFilled } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['toggle-sidebar', 'logout'])

const currentRouteName = computed(() => route.name)
const toggleSidebar = () => emit('toggle-sidebar')

const handleLogout = () => {
  emit('logout')
  setTimeout(() => {
    router.push('/')
  }, 1300)
}
</script>

<style scoped>
:deep(.el-dropdown__popper) {
  border: none !important;
}

:deep(.el-dropdown .el-tooltip__trigger:focus-visible) {
  outline: none !important;
}

:deep(.el-dropdown .el-tooltip__trigger) {
  border: none !important;
  outline: none !important;
}

:deep(.el-avatar) {
  border: none !important;
}

:deep(.el-dropdown-menu__item) {
  font-weight: 500 !important;
}

:deep(.el-dropdown-menu__item:hover) {
  color: red !important;
}
</style>
