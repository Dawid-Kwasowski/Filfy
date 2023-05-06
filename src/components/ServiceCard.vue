<template>
  <v-card variant="tonal" class="text-white pa-3 d-flex align-center">
    <v-avatar size="70" class="ma-5" color="white">
      <template v-if="props.image">
        <v-img :src="props.image"></v-img>
      </template>
      <template v-else>
        <v-icon size="48" color="indigo">{{props.icon}}</v-icon>
      </template>
    </v-avatar>
      <v-divider vertical class="rounded" thickness="5"></v-divider>
      <div class="d-flex flex-column">
        <v-card-title class="text-wrap">{{$vuetify.locale.t(props.title)}}</v-card-title>

        <v-card-subtitle class="text-wrap">{{$vuetify.locale.t(props.description)}}</v-card-subtitle>
      </div>
  </v-card>
</template>
<script setup lang="ts">
  const props = defineProps({
    icon: String,
    description: String,
    title: String,
    image: {
      type: String,
      optional: true
    }
  });
</script>
