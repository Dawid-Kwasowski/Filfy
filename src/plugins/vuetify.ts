/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { pl, en } from 'vuetify/locale'
import { createI18n, useI18n } from 'vue-i18n';
import {createVueI18nAdapter} from "vuetify/locale/adapters/vue-i18n";
import {messages} from "@/assets/content/messages";

export const i18n = createI18n({
  legacy: false,
  locale: 'pl',
  fallbackLocale: 'en',
  messages: messages
})

export default createVuetify({
  blueprint: md3,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  locale: {
    locale: 'pl',
    fallback: 'en',
    messages: { pl,en },
    adapter: createVueI18nAdapter({i18n, useI18n})
  }
})
