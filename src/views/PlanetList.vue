<template>
    <h1>Planet List</h1>
    <div class="search-section">
        <SearchBar></SearchBar>
    </div>
    <DataTable
        :value="planetsData.value"
        data-key="name"
        sortable
        >
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
    </DataTable>
    <div class="pagination-section">
        <Button></Button>
        <Button></Button>
        <Button></Button>
    </div>
    
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { DateTime } from 'luxon'

let planetsData = reactive({})


function createdTimeFormat(date:string) { 
    return DateTime.fromISO(date).toFormat('HH:mm dd-MM-yyyy')
}
</script>

<style scoped></style>
