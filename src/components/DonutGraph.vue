<template>
  <div ref="chartContainer" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineProps } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: {
    type: Array,
    default: () => [], // Expecting an array of objects: { name: 'Label', value: 123 }
  },
})

const chartContainer = ref(null)
let chart = null

const initializeChart = () => {
  if (chartContainer.value) {
    chart = echarts.init(chartContainer.value)
    chart.setOption({
      backgroundColor: 'rgba(255, 255, 255, 1)',
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Donut Chart',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true, // Show labels
            position: 'outside', // Position labels outside the donut
            formatter: '{b}: {c} ({d}%)', // Format labels: Name: Value (Percentage)
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: true, // Show label lines
          },
          data: props.data,
        },
      ],
    })
  }
}

const resizeChart = () => {
  if (chart) {
    chart.resize()
  }
}

onMounted(() => {
  initializeChart()
  window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart)
  if (chart) {
    chart.dispose()
  }
})

watch(
  () => props.data,
  () => {
    if (chart) {
      chart.setOption({
        series: [
          {
            data: props.data,
          },
        ],
      })
    }
  },
)
</script>
