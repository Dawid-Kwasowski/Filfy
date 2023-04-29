/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import {i18n} from "@/plugins/vuetify";


const app = createApp(App)

app.use(i18n)
registerPlugins(app)

app.mount('#app')
