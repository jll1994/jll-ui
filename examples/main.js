import Vue from "vue";
import App from "./App.vue";
// import jllButton from "./components/button.vue";
// import jllDialog from "./components/dialog.vue";
// import jllInput from "./components/input.vue";
// import jllSwitch from "./components/switch.vue";
// import jllRadio from "./components/radio.vue"
// import jllRadioGroup from "./components/radio-group.vue"
// import jllCheckbox from './components/checkbox.vue'
// import jllCheckboxGroup from './components/checkbox-group.vue'
// import jllForm from './components/form.vue'
// import jllFormItem from './components/form-item.vue'
// 导入组件库
import jllUI from "../packages";
// 注册组件库
Vue.use(jllUI);
import "./assets/fonts/font.scss";
Vue.config.productionTip = false;

// Vue.component(jllButton.name, jllButton);
// Vue.component(jllDialog.name, jllDialog);
// Vue.component(jllInput.name, jllInput);
// Vue.component(jllSwitch.name, jllSwitch);
// Vue.component(jllRadio.name, jllRadio);
// Vue.component(jllRadioGroup.name, jllRadioGroup);
// Vue.component(jllCheckbox.name, jllCheckbox);
// Vue.component(jllCheckboxGroup.name, jllCheckboxGroup);
// Vue.component(jllForm.name, jllForm);
// Vue.component(jllFormItem.name, jllFormItem);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
