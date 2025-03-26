<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
      <LeadType :count="8" heading="Total Generated Leads" icon="list-ul" />
      <LeadType :count="12" heading="Total Assigned Leads" icon="user-check" :isClickable="true"
        @click="handleGeneratedLeadsClick" />
      <LeadType :count="5" heading="Closed Leads" icon="check-circle" />
      <LeadType :count="3" heading="Convert to Client" icon="handshake" :isClickable="true"
        @click="handleGeneratedLeadsClick" />
      <LeadType :count="7" heading="Under Follow-up" icon="history" :isClickable="true"
        @click="handleGeneratedLeadsClick" />
      <LeadType :count="15" heading="New Leads" icon="plus-circle" :isClickable="true"
        @click="handleGeneratedLeadsClick" />
    </div>

    <div class="mt-8 w-full border border-t border-primary" />

    <div class="mt-6 w-full px-4 py-4 bg-white rounded-md shadow-sm">
      <Search label="Search" @search="onSearch" />
    </div>

    <div class="mt-5 w-full">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActivityType title="Calls" :tableData="callsData" :columns="callsColumns" />
        <ActivityType title="Emails" :tableData="emailData" :columns="emailColumns" />
        <ActivityType title="Visit" />
      </div>
    </div>

    <div class="mt-5 w-full">
      <div class="collapse collapse-arrow bg-white rounded-md shadow-md shadow-slate-200 pt-1">
        <input type="checkbox" class="peer" checked />
        <div class="collapse-title font-semibold text-black flex items-center">
          <span class="text-black font-semibold mr-2">Graph By Lead Avenue</span>
        </div>
        <div class="collapse-content">
          <div class="border border-t w-full border-gray-200 mb-2" />
          <div class="relative">
            <button @click="downloadChartAsPdf('bar')">
              <font-awesome-icon icon="download"
                class="absolute top-3 right-3 text-lg text-[#40a337] hover:text-[#64bd5c] z-10" />
            </button>
            <BarChart ref="barChartRef" :incomingData="incomingLeads" :outgoingData="outgoingLeads"
              :labels="leadAvenues" style="width: 100%" />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 w-full">
      <div class="collapse collapse-arrow bg-white rounded-md shadow-md shadow-slate-200 pt-1">
        <input type="checkbox" class="peer" checked />
        <div class="collapse-title font-semibold text-black flex items-center">
          <span class="text-black font-semibold mr-2">Lead Status Donut Graph</span>
        </div>
        <div class="collapse-content">
          <div class="border border-t w-full border-gray-200 mb-2" />
          <div class="relative">
            <button @click="downloadChartAsPdf('donut')">
              <font-awesome-icon icon="download"
                class="absolute top-3 right-3 text-lg text-[#40a337] hover:text-[#64bd5c] z-10" />
            </button>
            <DonutGraph ref="donutChartRef" :data="donutChartData" style="width: 100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas-pro'

import LeadType from '@/components/LeadType.vue'
import Search from '@/components/Search.vue'
import ActivityType from '@/components/ActivityType.vue'
import BarChart from '@/components/BarChart.vue'
import DonutGraph from '@/components/DonutGraph.vue'

const handleGeneratedLeadsClick = () => {
  console.log('Total Generated Leads card clicked!')
}

const onSearch = (searchTerm) => {
  console.log('Search term:', searchTerm)
}

const callsColumns = ref([
  { prop: 'name', label: 'Caller' },
  { prop: 'date', label: 'Call Date' },
])

const callsData = ref([
  { name: 'John Doe', date: '2023-10-26' },
  { name: 'Jane Smith', date: '2023-10-25' },
])

const emailColumns = ref([
  { prop: 'sender', label: 'From' },
  { prop: 'message', label: 'Message' },
])

const emailData = ref([{ sender: 'Alice', message: 'Hello!' }])

const leadAvenues = ref([
  'Lead Avenue 1',
  'Lead Avenue 2',
  'Lead Avenue 3',
  'Lead Avenue 4',
  'Lead Avenue 5',
])
const incomingLeads = ref([320, 302, 341, 374, 390])
const outgoingLeads = ref([120, 132, 101, 134, 90])

const donutChartData = ref([
  { name: 'Category A', value: 120 },
  { name: 'Category B', value: 200 },
  { name: 'Category C', value: 150 },
  { name: 'Category D', value: 80 },
])

const barChartRef = ref(null)
const donutChartRef = ref(null)

const downloadChartAsPdf = async (chartType) => {
  try {
    let chartElement
    let fileName
    let imgWidth
    let imgHeight

    if (chartType === 'bar') {
      chartElement = barChartRef.value.$el.querySelector('div')
      fileName = 'Graph-By-Lead-Avenue.pdf'
      imgWidth = 280
      imgHeight = 150
    } else if (chartType === 'donut') {
      chartElement = donutChartRef.value.$el.querySelector('div')
      fileName = 'Lead-Status-Donut-Graph.pdf'
      imgWidth = 260
      imgHeight = 120
    }

    if (chartElement) {
      const canvas = await html2canvas(chartElement, {
        scale: 2,
        useCORS: true,
        logging: true,
        willReadFrequently: true,
      })
      const imgData = canvas.toDataURL('image/png')

      const pdf = new jsPDF('landscape', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()

      // Calculate the scaling factor to maintain the ratio
      const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)

      // Apply the scaling factor to both width and height
      const scaledWidth = imgWidth * scaleFactor
      const scaledHeight = imgHeight * scaleFactor

      // Calculate the center positions based on the scaled dimensions
      const centerX = (pdfWidth - scaledWidth) / 2
      const centerY = (pdfHeight - scaledHeight) / 2

      pdf.addImage(imgData, 'PNG', centerX, centerY, scaledWidth, scaledHeight)
      pdf.save(fileName)
    }
  } catch (error) {
    console.error('Error generating PDF:', error)
  }
}
</script>
