<template>
  <v-card>
    <v-container>
      <v-row dense>
        <v-col v-for="({title, url}, index) in props.images" :key="index">
          <v-card>
            <v-img
              :src="url"
            ></v-img>
            <v-card-title>{{title}}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup lang="ts">
  const props = defineProps({
    images: Array<{title: string, url: string}>
  });
</script>

