<script>
import {FilterMatchMode} from '@primevue/core/api';

export default {
  name: "data-manager",
  props: {
    title: {type: {singular: '', plural: ''}, required: true},
    items: {type: Array, required: true},
    dynamic: {type: Boolean, default: false},
    columns: {type: Array, default: () => []},
  },
  data() {
    return {
      selectedItems: [],
      filters: null
    }
  },
  methods: {
    initFilters() {
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    },
    newItem() {
      this.$emit('new-item-requested');
    },
    editItem(item) {
      this.$emit('edit-item-requested', item);
    },
    exportToCsv() {
      this.$refs.dataTable.exportToCsv();
    },
    confirmDeleteItem(item) {
      this.$confirm.require({
        message: `Are you sure you want to delete this ${this.title.singular}?`,
        header: 'Confirm Delete',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-secondary p-button-outlined',
        rejectLabel: 'Cancel',
        acceptClass: 'p-button-danger',
        acceptLabel: 'Delete',
        accept: () => this.$emit('delete-item-requested', item),
        reject: () => {
        }
      });
    },
    confirmDeleteSelected() {
      this.$confirm.require({
        message: `Are you sure you want to delete the selected ${this.title.plural}?`,
        header: 'Confirm Delete',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-secondary p-button-outlined',
        rejectLabel: 'Cancel',
        acceptClass: 'p-button-danger',
        acceptLabel: 'Delete',
        accept: () => this.$emit('delete-selected-items-requested', this.selectedItems),
        reject: () => {
        }
      });
    },
    created() {
      this.initFilters();
    }
  }
}
</script>

<template>
  <pv-toast/>
  <pv-confirm-dialog/>

  <h3>Manage {{ title.plural }}</h3>

  <pv-toolbar>
    <template #start>
      <pv-button class="mr-2" icon="pi pi-plus" label="New" severiry="success" @click="newItem"/>
      <pv-button icon="pi pi-trash" label="Delete" severity="danger" @click="confirmDeleteSelected"/>
    </template>
    <template #end>
      <pv-button icon="pi pi-download" label="Export" severity="help" @click="exportToCsv($event)"/>
    </template>
  </pv-toolbar>
</template>

<pv-data-table
    ref="dataTable"
    v-model:selection="selectedItems"
    :filters="filters"
    :paginator="true"
    :rows="10"
    :rows-per-page="[5, 10, 20]"
    :value="items"
    data-key="id">
<pv-column :exportable="false" selection-mode="multiple" style="width: 3rem"/>
<slot name="custom-columns"></slot>
<pv-column v-if="dynamic" v-for="column in columns" :key="column.field" :field="column.field" :header="column.header"/>
<pv-column :exportable="false" style="min-width: 8rem">
  <template #body="slotProps">
    <pv-button icon="pi pi-pencil" outlined rounded @click="editItem(slotProps.data)"/>
    <pv-button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteItem(slotProps.data)"/>
  </template>
</pv-column>
</pv-data-table>

<style scoped>

</style>