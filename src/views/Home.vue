<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-sheet class="d-flex flex-column justify-center bg-transparent" height="400" rounded>
        <div class="pa-3 text-white">
          <h3 class="text-h3  mb-4">{{ $vuetify.locale.t('home.title') }}</h3>
          <span class="text-subtitle-1">{{$vuetify.locale.t('home.subtitle')}}</span>
        </div>
        <div class="pa-3">
          <v-form class="align-center d-flex" validate-on="submit">
            <v-text-field
              append-inner-icon="mdi-send"
              v-model="email"
              @click:append-inner="snackbar = true"
              hint="johndoe@example.com"
              clear-icon="mdi-close-circle"
              :label="$vuetify.locale.t('home.emailField')"
              variant="solo">
            </v-text-field>
          </v-form>
        </div>
      </v-sheet>
    </v-col>
    <v-col cols="12" md="6">
      <v-carousel hide-delimiters show-arrows="hover" hide-delimiter-background cycle class="rounded my-3">
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
      <v-card variant="tonal" class="text-white">
        <v-card-title>Lorem Ipsum</v-card-title>
      </v-card>
    </v-col>
  </v-row>
    <v-divider color="#fff" thickness="4" class="mx-16 my-6 rounded"></v-divider>
  <v-row>
    <v-col cols="12">
      <h3 class="text-white text-center text-h3">{{$vuetify.locale.t('home.services.t')}}</h3>
    </v-col>
    <v-col :key="index" v-for="({title, description, icon}, index) in services" cols="12" md="6" class="d-flex justify-center">
      <service-card
        :icon="icon"
        :description="description"
        :title="title"
      ></service-card>
    </v-col>
  </v-row>
  <v-divider color="#fff" thickness="4" class="mx-16 my-6 rounded"></v-divider>
  <v-row>
    <v-col cols="12">
      <h3 class="text-white text-center text-h3">{{$vuetify.locale.t('home.testimonials.t')}}</h3>
    </v-col>
    <v-col :key="index" v-for="({name, description, image}, index) in testimonials" cols="12" md="4" class="d-flex justify-center">
      <service-card
        :image="image"
        :description="description"
        :title="name"
      ></service-card>
    </v-col>
  </v-row>
  <v-snackbar
    v-model="snackbar"
  >
    {{$vuetify.locale.t('home.snackbar')}} {{email}}

    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script setup lang="ts">

import ServiceCard from "@/components/ServiceCard.vue";
import { ref } from "vue";
const services: Array<{title: string, description: string, icon: string}> = [
  {title: "home.services.apartmentCleaning", description: "Lorem Ipsum Cipsum solom bolom", icon: "mdi-home"},
  {title: "home.services.carCleaning", description: "Lorem Ipsum Cipsum solom bolom", icon: "mdi-car"}
];

const testimonials: Array<{name: string, description: string, image: string}> = [
  {name: "John Doe", description: "Lorem Ipsum Cipsum solom bolom", image: "https://i.pravatar.cc/300?img=3"},
  {name: "Bobby Dee", description: "Lorem Ipsum Cipsum solom bolom", image: "https://i.pravatar.cc/300?img=2"},
  {name: "Janina Cloe", description: "Lorem Ipsum Cipsum solom bolom", image: "https://i.pravatar.cc/300?img=1"}

];

const snackbar = ref(false);
const email = ref('');
</script>
