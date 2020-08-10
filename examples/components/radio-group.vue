<template>
  <div class="jll-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "jllRadioGroup",
  provide(){
      return {
          RadioGroup: this
      }
  },
  props: {
    value: {
      type: String
    }
  }
};
</script>