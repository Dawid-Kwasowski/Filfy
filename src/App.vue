<template>
  <v-layout :full-height="true">
    <div class="w-100 position-fixed mt-3 z-index">
      <navigation-bar @trigger-action="changeLanguage" :list="navigationList"></navigation-bar>
    </div>
    <v-main class="bg-gradient-blue mt-5 h-screen">
      <v-container fluid>
        <router-view />
      </v-container>
      <v-footer
        class="bg-grey-darken-4 text-center d-flex flex-column mt-6"
      >
        <div>
          <v-btn
            color="indigo"
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="text"
          ></v-btn>
        </div>

        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
        </div>

        <v-divider></v-divider>

        <div>
          {{ new Date().getFullYear() }} — <strong>Fifly</strong>
        </div>
      </v-footer>

    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import NavigationBar from "@/components/NavigationBar.vue";
  import { List } from "@/store/models/navigation-bar.model";
  import { useLocale } from 'vuetify'

  const { current, } = useLocale();

  const changeLanguage = (payload: string) => {
    current.value = payload.toLowerCase();
  }

  const icons = [
      'mdi-facebook',
      'mdi-email',
      'mdi-phone',
      'mdi-instagram',
    ]

  const offerList: List[] = [
    { title: "navigation.offer.subscribe", link: "/subscribe"},
  ];


  const localesList: List[] = [
    {title: "PL"},
    {title: "EN"}
  ];

  const navigationList: List[] = [
    { title: "navigation.home.t", link: "/", icon: "mdi-home-outline"},
    { title: "navigation.offer.t", icon: "mdi-credit-card-outline", sublist: offerList},
    {title: "navigation.language.t", icon: "mdi mdi-web", sublist: localesList}
  ];
</script>

<style>

.pos-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
}

body {
  min-height: 100vh;
  background: #005C97;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #363795, #005C97);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #363795, #005C97);
}
.bg-gradient-blue {
  background: #005C97;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #363795, #005C97);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
