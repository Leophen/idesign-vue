import { App, Plugin } from 'vue';
import Button from './button.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('i-button', Button);
  },
};

export { Button };