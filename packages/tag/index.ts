import { App, Plugin } from 'vue';
import Tag from './tag.vue';

export const TagPlugin: Plugin = {
  install(app: App) {
    app.component('i-tag', Tag);
  },
};

export { Tag };