<template>
  <div class="jll-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jllCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
