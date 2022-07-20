import { App, Plugin } from 'vue';
import Icon from './src/icon.vue';

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('i-icon', Icon);
  },
};

export { Icon };