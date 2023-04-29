<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-sheet class="d-flex flex-column justify-center bg-transparent" height="400" rounded>
        <div class="pa-3 text-white">
          <h3 class="text-h3  mb-4">{{ $vuetify.locale.t('home.title') }}</h3>
          <span class="text-subtitle-1">{{$vuetify.locale.t('home.subtitle')}}</span>
        </div>
        <div class="pa-3">
          <v-form>
            <v-text-field
              append-inner-icon="mdi-send"
              hint="johndoe@example.com"
              clear-icon="mdi-close-circle"
              clearable
              :label="$vuetify.locale.t('home.emailField')"
              variant="solo"></v-text-field>
          </v-form>
        </div>
      </v-sheet>
    </v-col>
    <v-col cols="12" md="6">
    </v-col>
  </v-row>
    <v-divider color="#fff" thickness="4" class="mx-16 my-6 rounded"></v-divider>
  <v-row></v-row>
</template>
<script setup lang="ts">
</script>
