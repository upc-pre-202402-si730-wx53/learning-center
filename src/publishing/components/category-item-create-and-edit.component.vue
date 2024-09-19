<script>
import CreateAndEdit from '../../shared/components/create-and-edit.component.vue';

export default {
  name: "category-item-create-and-edit-dialog",
  components: {CreateAndEdit},
  data() {
    return {
      submitted: false
    }
  },
  props: {
    item: null,
    visible: Boolean,
  },
  methods: {
    onCanceledRequested() {
      this.$emit('canceled');
    },
    onSavedRequested() {
      this.$emit('saved', this.item);
    }
  }
}

</script>

<template>
  <create-and-edit :entity="item" :visible="visible" entity-name="Category" @canceled="onCanceledRequested"
                   @saved="onSavedRequested">
    <template #content>
      <div class="p-fluid">
        <div class="field mt-5">
          <pv-float-label>
            <label for="name">Name</label>
            <pv-input-text id="name" v-model="item.name" :class="{'p-invalid': submitted && !item.name }"/>
          </pv-float-label>
        </div>
      </div>
    </template>
  </create-and-edit>
</template>

<style scoped>

</style>