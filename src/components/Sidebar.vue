<template>
  <aside
    class="bg-login-bg bg-cover bg-no-repeat bg-right h-screen sticky top-0 border-r overflow-hidden transition-all duration-300 flex-shrink-0"
    :class="{ 'w-20': isCollapsed, 'w-60': !isCollapsed }">
    <div class="h-full pt-8" style="background-color: rgba(131, 129, 147, 0.6)">
      <div class="mb-12">
        <Logo :main="false" :isCollapsed="isCollapsed" />
      </div>

      <el-menu :collapse="isCollapsed" router class="border-none custom-menu" :default-active="$route.path"
        close-on-click-outside :unique-opened="true">
        <el-menu-item index="/dashboard" class="custom-menu-item">
          <font-awesome-icon icon="home" class="text-white text-base mr-4 ml-2 custom-icon" />
          <template #title>Home</template>
        </el-menu-item>

        <el-sub-menu index="2" class="custom-menu-item">
          <template #title>
            <font-awesome-icon icon="user-plus" class="text-white text-base mr-3.5 ml-2 custom-icon" />
            <span class="font-medium text-white text-[15px]">Customers</span>
          </template>
          <el-menu-item index="/customer-information" class="custom-sub-menu-item">
            Customer Information
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3" class="custom-menu-item">
          <template #title>
            <font-awesome-icon icon="calendar-plus" class="text-white text-base mr-4 ml-2 custom-icon" />
            <span class="font-medium text-white text-[15px]">Activity</span>
          </template>
          <el-menu-item index="/create-activity" class="custom-sub-menu-item">
            Create Activity
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4" class="custom-menu-item">
          <template #title>
            <font-awesome-icon icon="file-lines" class="text-white text-[17px] mr-4 ml-2 custom-icon" />
            <span class="font-medium text-white text-[15px]">Inquiry</span>
          </template>
          <el-menu-item index="/view-report" class="custom-sub-menu-item">
            View Report
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </aside>
</template>

<script setup>
import Logo from '@/components/Logo.vue'

defineProps({
  isCollapsed: Boolean,
})
</script>

<style scoped>
.custom-menu {
  background-color: transparent !important;
}

.custom-menu-item {
  color: white !important;
  font-weight: 500 !important;
  font-size: 15px;
  transition: color 0.3s ease;
}

.custom-menu-item:hover {
  color: #117508 !important;
}

.custom-menu-item:hover .custom-icon {
  color: #117508 !important;
}

.custom-menu-item:hover span {
  color: #117508 !important;
}

/* Styling for el-sub-menu title */
:deep(.el-sub-menu__title) {
  color: white !important;
  font-weight: 500 !important;
  font-size: medium;
  transition: color 0.3s ease;
}

:deep(.el-sub-menu:hover .el-sub-menu__title) {
  color: #117508 !important;
}

/* Styling for el-menu-item */
:deep(.el-menu-item) {
  transition: color 0.3s ease;
}

:deep(.el-menu-item:hover) {
  color: #117508 !important;
}

.custom-sub-menu-item {
  color: #1b1c1b !important;
  font-weight: 500 !important;
}

.custom-sub-menu-item:hover {
  color: #1b1c1b !important;
  font-weight: 500 !important;
}

.el-menu--collapse {
  width: 100%;
}

.el-menu--collapse {
  width: 100%;
}

:deep(.el-menu--inline) {
  background-color: transparent !important;
  border: none !important;
}

:deep(.el-menu--inline .el-menu-item) {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: rgb(255, 255, 255) !important;
}

:deep(.el-menu--inline .el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.5) !important;
  color: #117508 !important;
}

:deep(.el-menu--inline .el-menu-item.is-active) {
  background-color: rgba(255, 255, 255, 0.15) !important;
}
</style>
