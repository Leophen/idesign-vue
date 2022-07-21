import { App, Plugin } from 'vue';
import Scrollbar from './scrollbar.vue';

export const ScrollbarPlugin: Plugin = {
  install(app: App) {
    app.component('i-scrollbar', Scrollbar);
  },
};

export { Scrollbar };