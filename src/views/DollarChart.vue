<template>
  <div id="chart">
    <div class="modal-content">
      <h1> USD a CPL </h1>
      <div class="svg-container"></div>
      <div class="buttons-container">
        <button class="button-secondary" @click="close">Cerrar</button>
        <button class="button-primary" @click="downloadExcel">Descargar en formato Excel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, SetupContext } from 'vue'
import { fetchDollarData } from '@/adapters/DataAPIAdapter'
import { fetchAndProcessDollarData } from '@/domain/usecases/FetchAndProcessDollarData'
import * as d3 from 'd3'
import * as XLSX from 'xlsx'

export default {
  name: 'DollarChart',
  setup (props:any, context: SetupContext) {
    const { emit } = context
    const data = ref<any[]>([])

    onMounted(async () => {
      data.value = await fetchAndProcessDollarData({ fetchDollarData })
      drawChart(data.value)
    })

    function downloadExcel () {
      const ws = XLSX.utils.json_to_sheet(data.value)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Datos')
      XLSX.writeFile(wb, 'data.xlsx')
    }

    function drawChart (data: any[]) {
      const margin = { top: 20, right: 20, bottom: 50, left: 50 }
      const width = 400 - margin.left - margin.right
      const height = 200 - margin.top - margin.bottom

      const yAxisFormat = (domainValue: d3.NumberValue) => `${domainValue} CLP`
      // Create scale
      const extent = d3.extent(data, d => new Date(d.fecha)) as [Date, Date]
      const xScale = d3.scaleTime()
        .domain(extent)
        .range([0, width])
      const yScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.variation), d3.max(data, d => d.variation)])
        .range([height, 0])

      // Create line
      const line = d3.line<{ fecha: string; variation: number }>()
        .x(d => xScale(new Date(d.fecha)))
        .y(d => yScale(d.variation))
      // ADD SVG to DOM
      const svg = d3.select('.svg-container')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        // X
      svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .append('text')
        .attr('x', width / 2)
        .attr('y', 40)
        .attr('fill', 'black')
        .style('text-anchor', 'middle')

      // Y
      svg.append('g')
        .call(d3.axisLeft(yScale).tickFormat(yAxisFormat))
        .append('text')
        .attr('x', 0)
        .attr('y', -30)
        .attr('fill', 'black')
        .style('text-anchor', 'middle')
      svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line)
    }

    function close () {
      emit('close')
    }

    return { close, downloadExcel }
  }
}
</script>

<style scoped>

#chart {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    max-width: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.buttons-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 10px;
}

.buttons-container button {
    border-radius: 20px;
    border: none;
    font-size: 1rem;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
}

.buttons-container button:hover {
    background: #00B0D8;
}

.button-primary {
  background: #00D4FF;
}

.button-secondary {
  background: #FE7117;
}

</style>
