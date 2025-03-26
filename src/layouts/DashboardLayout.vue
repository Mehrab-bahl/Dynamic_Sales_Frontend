<template>
  <div class="min-h-screen flex">
    <Sidebar :is-collapsed="isSidebarCollapsed" />
    <div class="flex-1 flex flex-col">
      <Navbar :is-collapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" @logout="handleLogout" />
      <main class="flex-1 overflow-auto bg-gray-50 pt-8 pb-6 px-6 transition-all duration-300 relative">
        <div class="mx-auto max-w-7xl">
          <router-view />
        </div>
        <NotificationWrapper ref="notificationWrapper" class="absolute top-4 right-4" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import NotificationWrapper from '@/components/NotificationWrapper.vue' // Import the new component

const isSidebarCollapsed = ref(false)
const notificationWrapper = ref(null) // Ref to the NotificationWrapper

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const handleLogout = () => {
  notificationWrapper.value.showNotification({
    title: 'Logout',
    message: 'You have been logged out.',
    type: 'success',
    position: 'top-right',
    duration: 3000,
  })
}
</script>
