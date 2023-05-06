<template>
  <v-card variant="tonal" class="d-flex flex-column text-white pa-2 elevation-5">
    <v-alert class="mb-5" variant="tonal">
      <v-card-title class="text-center text-h4">{{$vuetify.locale.t(title)}}</v-card-title>
    </v-alert>
    <v-card class="elevation-8"  color="">
      <v-list density="compact">
        <v-list-item
          v-for="(plan, i) in plans"
          :key="i"
          :value="plan"
          lines="two"
          rounded="sm"
        >
          <template v-slot:prepend>
            <v-icon color="primary">mdi-check-circle</v-icon>
          </template>

          <v-list-item-title>{{$vuetify.locale.t(plan.name)}}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <v-card-actions>
        <v-btn block>{{$vuetify.locale.t('subscription.button')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script setup lang="ts">

  import {toRefs} from "vue";

  interface PlanList {
    name: string;
  }

  const props = defineProps<{
    title: string,
    description: string,
    price?: number
    plans?: Array<PlanList>
  }>();

  const {title, plans} = toRefs(props);


</script>

<style scoped>

</style>
