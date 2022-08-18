import { App, Plugin } from 'vue';
import Switch from './switch.vue';

export const SwitchPlugin: Plugin = {
  install(app: App) {
    app.component('i-switch', Switch);
  },
};

export { Switch };