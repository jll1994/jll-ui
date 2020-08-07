<template>
  <div id="app">
    <div class="row">
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
    <jll-switch v-model="isSwitch" activeColor="#f0f00f" inactiveColor="#f0f"></jll-switch>
  
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
