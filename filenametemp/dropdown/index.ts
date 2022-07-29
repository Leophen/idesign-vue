import { App, Plugin } from 'vue';
import Dropdown from './dropdown.vue';

export const DropdownPlugin: Plugin = {
  install(app: App) {
    app.component('i-dropdown', Dropdown);
  },
};

export { Dropdown };