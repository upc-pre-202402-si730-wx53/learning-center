<script>
/**
 * Create and Edit generic component
 * @description
 * This component is used to create and edit any entity.
 * @remarks
 * It is a generic component that can be used to create and edit any entity.
 */

/**
 * Default dialog style
 * @description
 * This object represents the default dialog style. It has a width of 400px.
 * @type {{width: string}}
 */
const defaultStyle = { width: '400px' };

export default {
  name: "create-and-edit",
  props: { entity: null, visible: Boolean, entityName: '', edit: Boolean, size: 'default' },
  methods: {
    /**
     * Cancel the operation
     * @description
     * This method is used to cancel the operation. It emits the 'canceled' event.
     */
    onCancel() {
      this.$emit('cancel-requested');
    },

    /**
     * Save the entity
     * @description
     * This method is used to save the entity. It emits the 'saved' event.
     */
    onSave() {
      this.$emit('save-requested', this.entity);
    },

    /**
     * Get the header title
     * @description
     * This method is used to get the header title.
     * @returns {string} The header title
     */
    getHeaderTitle() {
      return `${this.edit ? 'Edit' : 'New'} ${this.entityName}`;
    },

    /**
     * Get the submit label
     * @description
     * This method is used to get the submit label.
     * It returns 'Update' if the edit property is true, otherwise it returns 'Create'.
     * @returns {string} The submit label
     */
    getSubmitLabel() {
      return this.edit ? 'Update' : 'Create';
    },

    /**
     * Get the dialog style
     * @description
     * This method is used to get the dialog style.
     * It returns the default style if the size property is 'default'.
     * It returns the width of 600px if the size property is 'standard'.
     * It returns the width of 900px if the size property is 'large'.
     * @returns {object} The dialog style
     */
    getDialogStyle() {
      let dialogStyle = defaultStyle;
      dialogStyle = this.size === 'standard' ? { width: '600px'} : defaultStyle;
      dialogStyle = this.size === 'large' ? { width: '900px'} : defaultStyle;
      return dialogStyle;
    }

  }
}
</script>

<template>
  <pv-dialog v-bind:visible="visible" :modal="true" :style="getDialogStyle()" class="p-fluid" :header="entityName">
    <template #header>
      <div class="flex justify-content-start">
        <div>{{ getHeaderTitle() }}</div>
      </div>
    </template>
    <slot name="content"></slot>
    <template #footer>
      <div class="flex justify-content-end">
        <pv-button type="button" :label="getSubmitLabel()" class="p-button-text" icon="pi pi-check" @click="onSave"/>
        <pv-button type="button" label="Cancel" severity="secondary" class="p-button-text" icon="pi pi-times" @click="onCancel"/>
      </div>
    </template>
  </pv-dialog>

</template>

<style scoped>

</style>