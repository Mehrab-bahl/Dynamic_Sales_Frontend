<template>
    <div class="bg-white w-full rounded-md shadow-md shadow-slate-200 px-6 py-5">
      <h2 class="text-primary font-semibold text-lg">Search Lead Criteria</h2>
      <div class="border border-t w-full border-gray-200 mt-2 mb-6" />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
  
        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">Lead Type</label>
          <el-select v-model="SelectedLeadType" placeholder="Select Lead Type" class="w-full">
            <el-option
              v-for="item in leadtype"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
  
        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">Status</label>
          <el-select v-model="SelectedStatus" placeholder="Select Status" class="w-full">
            <el-option
              v-for="item in LeadStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
  
        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">Lead ID</label>
          <el-input v-model="input" placeholder="" clearable class="w-full" />
        </div>
  
        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">Contact No.</label>
          <el-input v-model="input" placeholder="" clearable class="w-full" />
        </div>
  
        <el-col>
        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">CNIC</label>
          <el-input v-model="input" placeholder="" clearable class="w-full" />
        </div>
        <p class="text-black text-xs mt-1">Hint: 12345678900000</p>
        </el-col>


        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">Customer</label>
          <el-input v-model="input" placeholder="" clearable class="w-full" />
        </div>

        <div class="flex items-center gap-2">
        </div>
  
        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">Branch Code</label>
          <el-select v-model="SelectedStatus" placeholder="Select Branch Code" class="w-full">
            <el-option
              v-for="item in BranchCode"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>

        <div class="flex items-center gap-2">
        <label class="text-gray-700 font-medium text-sm w-24">Date From</label>
        <el-date-picker
          v-model="dateFrom"
          type="date"
          placeholder="Pick a date"
          class="w-full"
        />
      </div>

      <div class="flex items-center gap-2">
        <label class="text-gray-700 font-medium text-sm w-24">Date To</label>
        <el-date-picker
          v-model="dateTo"
          type="date"
          placeholder="Pick a date"
          class="w-full"
        />
      </div>
      </div>
        <div class="mt-4 flex justify-start">
            <el-button type="primary">Search</el-button>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  const SelectedLeadType = ref(null);
  const SelectedStatus = ref(null);
  const input = ref('');
  
  const LeadStatus = ref([
    { value: 'UFU', label: 'Under Follow Up' },
    { value: 'CTC', label: 'Convert To Client' },
    { value: 'Clo', label: 'Closed' },
  ]);
  
  const leadtype = ref([
    { value: 'option1', label: 'Option One' },
    { value: 'option2', label: 'Option Two' },
    { value: 'option3', label: 'Option Three' },
  ]);

  const BranchCode = ref([
    { value: 'option1', label: 'Option One' },
    { value: 'option2', label: 'Option Two' },
    { value: 'option3', label: 'Option Three' },
  ]);
  </script>
  
  <style scoped>
  .el-select,
  .el-input {
    width: 90%;
  }
  </style>