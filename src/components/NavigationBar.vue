<template>
  <v-app-bar rounded :extended="drawer" extension-height="350" :elevation="5">
    <v-app-bar-title>
      <span class="text-blue-accent-4">Filfy</span>
    </v-app-bar-title>
    <template v-slot:append>
      <template v-if="isMobile">
        <v-app-bar-nav-icon  @click="toggleDrawer();"></v-app-bar-nav-icon>
      </template>
      <template v-else>
        <v-btn :prepend-icon="icon" v-for="({icon, sublist, title, link}) in props.list" :key="title" variant="text">
          <template v-if="sublist">
            <v-menu open-on-hover activator="parent">
              <v-list>
                <v-list-item
                  v-for="({title, link}, index) in (sublist)"
                  :key="index"
                  :value="index"
                  @click="['PL', 'EN'].includes(title) ? eventTrigger(title) : ''"
                >
                  <router-link custom #="{href, navigate}"  :to="link">
                    <v-list-item-title :href="href" @click="navigate">{{ $vuetify.locale.t(title) }}</v-list-item-title>
                  </router-link>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-if="link">
            <router-link custom #="{href, navigate}"  :to="link">
              <span :href="href" @click="navigate">{{ $vuetify.locale.t(title) }}</span>
            </router-link>
          </template>
          <template v-else>
            {{ $vuetify.locale.t(title) }}
          </template>
        </v-btn>
      </template>
    </template>
    <template v-if="drawer && isMobile" #extension>
      <v-list min-width="100%">
        <template
          v-for="{icon, link, sublist, title} in props.list"
          :key="link">
          <template v-if="sublist">
            <v-list-group :prepend-icon="icon" :value="title">
              <template #activator="{ props }">
                <v-list-item
                  v-bind="props"
                >
                  <v-list-item-title>{{ $vuetify.locale.t(title) }}</v-list-item-title>
                </v-list-item>
              </template>
              <v-list-item
                v-for="{ title } in (sublist)"
                @click="['PL', 'EN'].includes(title) ? eventTrigger(title) : ''"
                :key="title"
              >
                <v-list-item-title>{{ $vuetify.locale.t(title) }}</v-list-item-title>
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item :prepend-icon="icon">
              <v-list-item-title>{{ $vuetify.locale.t(title) }}</v-list-item-title>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import {ref, Ref, computed, ComputedRef, defineEmits} from "vue";
  import { List } from "@/store/models/navigation-bar.model";
  interface Props {
    list: List[];
  }

  const props = defineProps<Props>();

  const emit = defineEmits(['triggerAction']);

  const drawer: Ref<boolean> = ref(false);
  const isMobile: ComputedRef<boolean> = computed(() => {
    return matchMedia("(max-width: 800px)").matches
  })

  const eventTrigger = (payload: any) => {
    emit('triggerAction', payload);
  }

  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  }
</script>
