<template>
  <div ref="chartContainer" style="width: 100%; height: 500px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineProps } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  incomingData: {
    type: Array,
    default: () => [],
  },
  outgoingData: {
    type: Array,
    default: () => [],
  },
  labels: {
    type: Array,
    default: () => [
      'Lead Avenue 1',
      'Lead Avenue 2',
      'Lead Avenue 3',
      'Lead Avenue 4',
      'Lead Avenue 5',
    ],
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
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['Incoming', 'Outgoing'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: props.labels,
      },
      series: [
        {
          name: 'Incoming',
          type: 'bar',
          data: props.incomingData,
        },
        {
          name: 'Outgoing',
          type: 'bar',
          data: props.outgoingData,
        },
      ],
    })
  }
}

const resizeChart = () => {
  if (chart) {
    chart.resize() // Resize the chart to fit the new container size
  }
}

onMounted(() => {
  initializeChart()
  window.addEventListener('resize', resizeChart) // Listen for window resize events
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart) // Clean up event listener
  if (chart) {
    chart.dispose() // Dispose of the chart instance
  }
})

watch(
  () => [props.incomingData, props.outgoingData, props.labels],
  () => {
    if (chart) {
      chart.setOption({
        yAxis: {
          data: props.labels,
        },
        series: [
          {
            data: props.incomingData,
          },
          {
            data: props.outgoingData,
          },
        ],
      })
    }
  },
)
</script>
