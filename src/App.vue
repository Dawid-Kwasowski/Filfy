<template>
  <v-layout :full-height="true">
    <navigation-bar :list="navigationList"></navigation-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import NavigationBar from "@/components/NavigationBar.vue";
  import { List } from "@/store/models/navigation-bar.model";

  const offerList: List[] = [
    { title: "Subskrypcje", link: "/subscribe"},
    { title: "Wypróbuj", link: "/trial"}
  ];

  const pointList: List[] = [
    { title: "Wydaj punkty", link: "/spend-points"},
    { title: "Jak zdobyć punkty?", link: "/get-info"}
  ]

  const navigationList: List[] = [
    { title: "Główna", link: "/", icon: "mdi-home-outline"},
    { title: "Oferta", link: "/offer", icon: "mdi-credit-card-outline", sublist: offerList},
    { title: "Punkty", link: "/points", icon: "mdi-counter", sublist: pointList},
    { title: "Kontakt", link: "/contact", icon: "mdi-card-account-phone-outline"},
    { title: "Regulamin", link: "/statue", icon: "mdi-note-text-outline"}
  ];
</script>
