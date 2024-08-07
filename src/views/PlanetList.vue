<template>
    <div class="wrapper" data-testid="planet-list">
      <h3>Planet List</h3>
      <DataTable
        v-model:filters="filters"
        :value="planetsData"
        data-key="name"
        sortable
        :loading="loading"
        paginator
        :rows="10"
        filterDisplay="row"
        :globalFilterFields="['name', 'climate']"
        scrollable
        scrollHeight="calc(100vh - 330px)"
      >
        <template #header>
          <div class="flex justify-between">
            <Button type="button" label="Clear" outlined @click="clearFilter" />
            <InputText v-model="filters.global.value" placeholder="Type to Search..." />
          </div>
        </template>
        <Column key="name" field="name" header="Name" frozen sortable></Column>
        <Column key="population" field="population" header="Population" sortable></Column>
        <Column key="rotation_period" field="rotation_period" header="Rotation Period" sortable></Column>
        <Column key="climate" field="climate" header="Climate" sortable></Column>
        <Column key="gravity" field="gravity" header="Gravity" sortable></Column>
        <Column key="created" field="created" header="Created" sortable>
          <template #body="slotProps">
            {{ formatCreatedTime(slotProps.data.created) }}
          </template>
        </Column>
        <Column key="url" field="url" header="Url" sortable></Column>
        <template #loading> Loading Planets. Please wait. </template>
        <template #empty> No Planets found. </template>
      </DataTable>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { DateTime } from 'luxon'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { PlanetsDataService } from '../services/PlanetsDataService'
import type PlanetsResponseData from '../types/PlanetsResponseData'

const planetsData = ref<PlanetsResponseData[]>([])
const loading = ref(true)
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
  climate: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
})

const initFilters = () => {
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    climate: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
  }
}

const clearFilter = () => {
  initFilters()
}

const formatCreatedTime = (date: string) => {
  return DateTime.fromISO(date).toFormat('HH:mm dd-MM-yyyy')
}

const fetchData = async () => {
  try {
    const response = await PlanetsDataService()
    planetsData.value = response
  } catch (error) {
    console.error('Error fetching planets data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>

<style lang="scss" scoped src="../styles/tableStyles.scss"></style>
<style lang="scss" scoped>
.wrapper {
  height: calc(100vh - 180px);
  h3 {
    margin-bottom: 15px;
    text-align: center;
  }
}

@media (min-width: 1440px) {
  .wrapper {
    padding: 0 60px;
  }
}

@media (min-width: 1024px) {
  .wrapper {
    padding: 0 40px;
  }
}
</style>