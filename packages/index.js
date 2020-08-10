import Button from "./button.vue";
import Dialog from "./dialog.vue";
import Input from "./input.vue";
import Switch from "./switch.vue";
import Radio from "./radio.vue";
import RadioGroup from "./radio-group.vue";
import Checkbox from "./checkbox.vue";
import CheckboxGroup from "./checkbox-group.vue";
import Form from "./form.vue";
import FormItem from "./form-item.vue";
import "./fonts/font.scss";
const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
];
const install = function(Vue) {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  // 以下是具体的组件
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
};
