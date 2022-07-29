import { App, Plugin } from 'vue';
import Icon from './icon.vue';

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('i-icon', Icon);
  },
};

export { Icon };