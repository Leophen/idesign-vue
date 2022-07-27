import { App, Plugin } from 'vue';
import Badge from './badge.vue';

export const BadgePlugin: Plugin = {
  install(app: App) {
    app.component('i-badge', Badge);
  },
};

export { Badge };