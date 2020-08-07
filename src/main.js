import Vue from "vue";
import App from "./App.vue";
import jllButton from "./components/button.vue";
import jllDialog from "./components/dialog.vue";
import jllInput from "./components/input.vue";
import jllSwitch from "./components/switch.vue";
import "./assets/fonts/font.scss";
Vue.config.productionTip = false;

Vue.component(jllButton.name, jllButton);
Vue.component(jllDialog.name, jllDialog);
Vue.component(jllInput.name, jllInput);
Vue.component(jllSwitch.name, jllSwitch);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
