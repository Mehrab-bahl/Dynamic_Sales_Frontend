<template>
  <div class="bg-white w-full rounded-md shadow-md shadow-slate-200 px-6 py-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <!-- First Dropdown -->
      <div class="grid grid-cols-[auto,1fr] items-center gap-2">
        <label class="text-gray-700 font-medium text-sm mr-2">Select Branch</label>
        <el-select v-model="selectedBranch" placeholder="Select branch">
          <el-option
            v-for="item in branches"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <!-- Second Dropdown -->
      <div class="grid grid-cols-[auto,1fr] items-center gap-2">
        <label class="text-gray-700 font-medium text-sm mr-2">Lead Avenue</label>
        <el-select v-model="selectedLeadAvenue" placeholder="Select lead avenue">
          <el-option
            v-for="item in avenues"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
  </div>

  <div class="bg-white w-full rounded-md shadow-md shadow-slate-200 px-6 py-4 mt-5">
    <div v-if="selectedLeadAvenue === 'self'">
      <h2 class="text-primary font-semibold text-lg">Self-Generated</h2>

      <div class="border border-t w-full border-gray-200 mt-2 mb-6" />

      <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div class="flex flex-row items-center">
          <div class="w-[20%]">
            <label class="text-gray-700 font-medium text-sm">Customer Name</label>
          </div>
          <div class="w-[80%]">
            <el-input v-model="input" placeholder="Enter customer name" clearable />
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedLeadAvenue === 'existing'">
      <h2 class="text-primary font-semibold text-lg">Existing Customer</h2>

      <div class="border border-t w-full border-gray-200 mt-2 mb-6" />

      <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div class="flex flex-row items-center">
          <div class="w-[20%]">
            <label class="text-gray-700 font-medium text-sm">Customer Name</label>
          </div>
          <div class="w-[80%]">
            <el-input v-model="input" placeholder="Enter customer name" clearable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedBranch = ref(null)
const selectedLeadAvenue = ref(null)
const input = ref('')

const branches = ref([
  { value: 'main', label: 'Karachi Main' },
  { value: 'gulshan', label: 'Gulshan-e-Iqbal' },
  { value: 'north', label: 'North Nazimabad' },
])

const avenues = ref([
  { value: 'self', label: 'Self-Generated' },
  { value: 'existing', label: 'Existing Customer' },
])
</script>

<style scoped>
.el-select,
.el-input {
  min-width: 150px;
  width: 100%;
}
</style>
