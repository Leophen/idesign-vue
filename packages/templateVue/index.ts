import { App, Plugin } from 'vue';
import Template from './template.vue';

export const TemplatePlugin: Plugin = {
  install(app: App) {
    app.component('i-template', Template);
  },
};

export { Template };