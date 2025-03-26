<template>
  <div class="bg-white p-4 shadow-md shadow-slate-200 rounded-md">
    <div class="flex items-center justify-center">
      <h2 class="text-black font-semibold text-base">{{ title }}</h2>
    </div>

    <div class="mt-2.5 mb-4 w-full border border-t border-primary" />

    <template v-if="tableData && tableData.length > 0">
      <el-table :data="tableData" :max-height="150" border style="width: 100%"
        :header-cell-style="{ backgroundColor: '#e8e9eb', color: 'black' }">
        <el-table-column v-for="(column, index) in columns" :key="index" :prop="column.prop" :label="column.label"
          header-align="center" />
      </el-table>
    </template>
    <template v-else>
      <div class="flex items-center justify-center">
        <p class="text-gray-500 font-medium text-sm mt-2">No Activity to Show</p>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  tableData: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [
      { prop: 'name', label: 'Customer Name' },
      { prop: 'date', label: 'Date' },
    ],
  },
})
</script>
