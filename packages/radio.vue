<template>
  <label class="jll-radio" :class="{'is-checked': label === model}">
    <span class="jll-radio__input">
      <span class="jll-radio__inner"></span>
      <input class="jll-radio__original" type="radio" :value="label" :name="name" v-model="model" />
    </span>
    <span class="jll-radio__label">
      <slot></slot>
      <!-- 如果没有传内容，我们就把label当成内容 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "jllRadio",
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value);
      }
    },
    isGroup () {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
.jll-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .jll-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .jll-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .jll-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .jll-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.jll-radio.is-checked {
  .jll-radio__input {
    .jll-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .jll-radio__label {
    color: #409eff;
  }
}
</style>