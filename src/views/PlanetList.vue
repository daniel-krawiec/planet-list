<template>
    <h1>Planet List</h1>
    <DataTable
        v-model:filters="filters"
        :value="planetsData.value"
        data-key="name"
        sortable
        :loading="loading"
        paginator 
        :rows="10"
        filterDisplay="row"
        :globalFilterFields="['name', 'climate']"
    >
        <template #header>
            <div class="flex justify-between">
                <Button type="button" label="Clear" outlined @click="clearFilter()" />
                <InputText v-model="filters['global'].value" placeholder="Type to Search..." />
            </div>
        </template>
        <Column key="name" field="name" header="Name" sortable></Column>
        <Column key="population" field="population" header="Population" sortable></Column>
        <Column key="rotation_period" field="rotation_period" header="Rotation Period" sortable></Column>
        <Column key="climate" field="climate" header="Climate" sortable></Column>
        <Column key="gravity" field="gravity" header="Gravity" sortable></Column>
        <Column key="created" field="created" header="Created" sortable>
            <template #body="slotProps">
                {{ createdTimeFormat(slotProps.data.created) }}
            </template>
        </Column>
        <Column key="url" field="url" header="Url" sortable></Column>
        <template #loading> Loading Planets. Please wait. </template>
        <template #empty> No Planets found. </template>
    </DataTable>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import { DateTime } from 'luxon'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { PlanetsDataService } from '../services/PlanetsDataService'
import PlanetsResponseData from '../types/PlanetsResponseData'

let planetsData: PlanetsResponseData = reactive({})
const loading = ref(true);
const filters = ref();

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        climate: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    };
};
initFilters();
const clearFilter = () => {
    initFilters();
}

const createdTimeFormat = (date: string) => { 
    return DateTime.fromISO(date).toFormat('HH:mm dd-MM-yyyy')
}
const fetchData = () => {
    PlanetsDataService()
    .then((response: PlanetsResponseData) => { 
        planetsData.value = response
        loading.value = false;
    }).catch(response => { 
        loading.value = false;
        console.log(response)
    })
}
onMounted(() => {
    fetchData()
})
</script>

<style scoped></style>
