<template>
  <v-layout :full-height="true">
    <navigation-bar @trigger-action="changeLanguage" :list="navigationList"></navigation-bar>
    <v-main  class="bg-gradient-blue h-screen">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import NavigationBar from "@/components/NavigationBar.vue";
  import { List } from "@/store/models/navigation-bar.model";
  import { useLocale } from 'vuetify'

  const { t, current, } = useLocale();

  const changeLanguage = (payload: string) => {
    current.value = payload.toLowerCase();
  }

  const offerList: List[] = [
    { title: "navigation.offer.subscribe", link: "/subscribe"},
    { title: "navigation.offer.try", link: "/trial"},
    { title: "navigation.offer.terms", link: "/statue", icon: "mdi-note-text-outline"}
  ];

  const pointList: List[] = [
    { title: "navigation.points.spendPoints", link: "/spend-points"},
    { title: "navigation.points.howToGetPoints", link: "/get-info"}
  ];

  const localesList: List[] = [
    {title: "PL"},
    {title: "EN"}
  ];

  const navigationList: List[] = [
    { title: "navigation.home.t", link: "/", icon: "mdi-home-outline"},
    { title: "navigation.offer.t", icon: "mdi-credit-card-outline", sublist: offerList},
    { title: "navigation.points.t", icon: "mdi-counter", sublist: pointList},
    {title: "navigation.language.t", icon: "mdi mdi-web", sublist: localesList}
  ];
</script>

<style>
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
