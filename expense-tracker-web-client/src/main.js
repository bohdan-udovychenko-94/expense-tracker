import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import App from './App.vue'
import store from './stores/rootStore'

loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .mount('#app')
