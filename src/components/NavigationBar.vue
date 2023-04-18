<template>
  <v-app-bar rounded :extended="drawer" density="comfortable" extension-height="350" :elevation="5">
    <v-app-bar-title>
      <span class="text-blue-accent-3">Filfy</span>
    </v-app-bar-title>
    <template v-slot:append>
      <v-app-bar-nav-icon @click="toggleDrawer();"></v-app-bar-nav-icon>
    </template>
    <template v-if="drawer" #extension>
        <v-list min-width="100%">
          <template
            v-for="item in props.list"
            :key="item.link">
            <template v-if="item.sublist">
              <v-list-group :prepend-icon="item.icon" :value="item.title">
                <template #activator="{ props }">
                  <v-list-item
                    v-bind="props"
                   :title="item.title"
                  ></v-list-item>
                </template>
                <v-list-item
                v-for="subitem in item.sublist"
                :key="subitem.title"
                :title="subitem.title"
                ></v-list-item>
              </v-list-group>
            </template>
            <template v-else>
              <v-list-item :prepend-icon="item.icon" :title="item.title"></v-list-item>
            </template>
          </template>
        </v-list>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { ref, Ref } from "vue";
  import { List } from "@/store/models/navigation-bar.model";
  interface Props {
    list: List[];
  }

  const props = defineProps<Props>();
  const drawer: Ref<boolean> = ref(false);

  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  }
</script>
