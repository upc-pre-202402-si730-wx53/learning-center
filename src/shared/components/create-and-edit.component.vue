<script>
export default {
  name: 'create-and-edit',
  props: {entity: null, visible: Boolean, entityName: '', edit: Boolean, size: 'default'},
  methods: {
    getHeaderTitle() {
      return `${this.edit ? 'Edit' : 'New'} ${this.entityName}`;
    },
    onSave(){
      this.$emit('saved', this.entity);
    },
    onCancel(){
      this.$emit('canceled');
    }
  }
}
</script>

<template>
  <pv-dialog v-bind:visible="visible" :modal="true" class="p-fluid" :header="entityName">
    <template #header>
      <div>{{ getHeaderTitle() }}</div>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="flex justify-content-end">
        <pv-button type="button" label="Submit" class="p-button-text" icon="pi pi-check" @click="onSave"/>
        <pv-button type="button" label="Cancel" class="p-button-text" icon="pi pi-times" @click="onCancel"/>
      </div>
    </template>
  </pv-dialog>
</template>

<style scoped>

</style>