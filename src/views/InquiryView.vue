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
          <el-input v-model="leadId" placeholder="" clearable class="w-full" />
        </div>
  
        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">Contact No.</label>
          <el-input v-model="contactNo" placeholder="" clearable class="w-full" />
        </div>
  
        <el-col :span="24">
        <div class="flex flex-col gap-1">
          <div class="flex items-start gap-2">
            <label class="text-gray-700 font-medium text-sm w-24">CNIC</label>
            <el-input v-model="cnic" placeholder="" clearable class="w-full" />
          </div>
          <p class="text-black text-xs ml-24">Hint: 12345678900000</p>
        </div>
      </el-col>

        <div class="flex items-center gap-2">
          <label class="text-gray-700 font-medium text-sm w-24">Customer</label>
          <el-input v-model="customer" placeholder="" clearable class="w-full" />
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
            <el-button type="success" @click="handleSearch">Search</el-button>
        </div>
        
    </div>
    <div v-if="showTable" class="mt-6" overflow-x-auto>
          <el-table :data="tableData" border stripe>
          <el-table-column prop="branchCode" label="Branch Code" width="120" />
          <el-table-column prop="leadstatus" label="Lead Status" width="120" />
          <el-table-column prop="updatedAt" label="Updated At" width="180" />
          </el-table>
    </div>  
    <div class="mt-4 flex">
        <el-button type="success" class="mr-2">Download Excel</el-button>
        <el-button type="danger">Download PDF</el-button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  const SelectedLeadType = ref(null);
  const SelectedStatus = ref(null);
  const leadId = ref('');
  const contactNo = ref('');
  const cnic = ref('');
  const customer = ref('');
  const dateFrom = ref(null);
  const dateTo = ref(null);
  const showTable = ref(false); 
  const tableData = ref([]); 

  
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

  // Sample data for the table (replace with your actual data fetching logic)
const sampleTableData = [
  { branchCode: '1001', leadstatus: 'UFU', updatedAt: '2024-01-15 10:00:00' },
  { branchCode: '2001', leadstatus: 'CTC', updatedAt: '2024-02-20 14:30:00' },
  { branchCode: '5001', leadstatus: 'Clo', updatedAt: '2024-03-10 09:15:00' },
];

const handleSearch = () => {
  // In a real application, you would make an API call here
  // using the search criteria (SelectedLeadType, SelectedStatus, etc.)

  // For this example, we'll just show the table with sample data
  showTable.value = true;
  tableData.value = sampleTableData;

  // You can add logic here to handle empty search results if needed
  // if (tableData.value.length === 0) {
  //   ElMessage.warning('No leads found matching the criteria.');
  // }
};
  </script>
  
  <style scoped>
  .el-select,
  .el-input {
    width: 90%;
  }
  </style>