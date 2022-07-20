import { App, Plugin } from 'vue';
import Divider from './src/divider';

export const DividerPlugin: Plugin = {
  install(app: App) {
    app.component('i-divider', Divider);
  },
};

export { Divider };
