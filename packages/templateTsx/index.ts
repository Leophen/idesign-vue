import { App, Plugin } from 'vue';
import Template from './template';

export const TemplatePlugin: Plugin = {
  install(app: App) {
    app.component('i-template', Template);
  },
};

export { Template };
