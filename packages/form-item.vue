<template>
  <div class="jll-form-item">
    <label class="jll-form-item__label" :style="{width: this.Form.labelWidth}">{{label}}</label>
    <div class="jll-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jllFormItem',
  props: {
    label: String
  },
  inject: ['Form']
}
</script>

<style lang="scss">
.jll-form-item {
  margin-bottom: 25px;
  .jll-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .jll-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
