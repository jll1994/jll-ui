<template>
  <div id="app">
    <!-- <div class="row">
      <jll-button>按钮</jll-button>
      <jll-button type="primary">按钮</jll-button>
      <jll-button type="warning">按钮</jll-button>
      <jll-button type="info">按钮</jll-button>
      <jll-button type="danger">按钮</jll-button>
      <jll-button type="success">按钮</jll-button>
    </div>
    <div class="row">
      <jll-button plain>按钮</jll-button>
      <jll-button plain type="primary">按钮</jll-button>
      <jll-button plain type="warning">按钮</jll-button>
      <jll-button plain type="info">按钮</jll-button>
      <jll-button plain type="danger">按钮</jll-button>
      <jll-button plain type="success">按钮</jll-button>
    </div>
    <div class="row">
      <jll-button plain round icon="jll-icon-search">按钮</jll-button>
      <jll-button plain round icon="jll-icon-search" type="primary">按钮</jll-button>
      <jll-button plain round icon="jll-icon-search" type="warning">按钮</jll-button>
      <jll-button plain round icon="jll-icon-search" type="info">按钮</jll-button>
      <jll-button plain round icon="jll-icon-search" type="danger">按钮</jll-button>
      <jll-button plain round icon="jll-icon-search" type="success">按钮</jll-button>
    </div>
    <div class="row">
      <jll-button plain circle>钮</jll-button>
      <jll-button plain circle type="primary">钮</jll-button>
      <jll-button plain circle type="warning">钮</jll-button>
      <jll-button plain circle type="info">钮</jll-button>
      <jll-button plain circle type="danger">钮</jll-button>
      <jll-button plain circle type="success">钮</jll-button>
    </div>
    <div class="row">
      <jll-button plain circle icon="jll-icon-search"></jll-button>
      <jll-button plain circle icon="jll-icon-search" type="primary"></jll-button>
      <jll-button plain circle icon="jll-icon-search" type="warning"></jll-button>
      <jll-button plain circle icon="jll-icon-search" type="info"></jll-button>
      <jll-button plain circle icon="jll-icon-search" type="danger"></jll-button>
      <jll-button plain circle icon="jll-icon-search" type="success"></jll-button>
    </div>
    <jll-button type="primary" @click="visible=true">对话框</jll-button>
    <jll-dialog width="40%" title="温馨提示" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <template v-slot:footer>
        <jll-button @click="visible=false">取消</jll-button>
        <jll-button type="primary" @click="visible=false">确认</jll-button>
      </template>
    </jll-dialog>

    <jll-input placeholder="请输入用户名" v-model="input" clearable></jll-input>
    <jll-input placeholder="请输入用户名" v-model="input" show-password></jll-input>

    <jll-switch v-model="isSwitch"></jll-switch>
    <jll-switch v-model="isSwitch" activeColor="#f0f00f" inactiveColor="#f0f"></jll-switch> -->

    <!-- <jll-radio label="1" v-model="gender">男</jll-radio>
    <jll-radio label="0" v-model="gender">女</jll-radio>
    <jll-radio-group v-model="genderGroup">
      <jll-radio label="1">男</jll-radio>
      <jll-radio label="0">女</jll-radio>
    </jll-radio-group> -->

    <!-- <jll-checkbox v-model="checkbox">全选</jll-checkbox>
    <jll-checkbox-group v-model="checkboxGroup">
      <jll-checkbox label="0">吃饭</jll-checkbox>
      <jll-checkbox label="1">睡觉</jll-checkbox>
      <jll-checkbox label="2">打豆豆</jll-checkbox>
    </jll-checkbox-group> -->


    <jll-form :model="model">
      <jll-form-item label="用户名">
        <jll-input v-model="model.name"></jll-input>
      </jll-form-item>
      <jll-form-item label="选择">
        <jll-switch v-model="model.isSelected"></jll-switch>
      </jll-form-item>
    </jll-form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
      input: "123",
      isSwitch: false,
      gender: "1",
      genderGroup: "0",
      checkbox: true,
      checkboxGroup: ['0'],
      model: {
        name: "张三",
        isSelected: true
      }
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.row {
  margin-bottom: 10px;
  .jll-button {
    margin-right: 10px !important;
  }
}
</style>
