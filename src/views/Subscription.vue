<template>
  <v-row>
    <v-col cols="12">
      <v-sheet class="d-flex flex-column justify-center bg-transparent" rounded>
        <div class="pa-3 text-center text-white">
          <h3 class="text-h3  mb-4">{{ $vuetify.locale.t('subscription.title') }}</h3>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
  <v-divider color="#fff" thickness="4" class="mx-16 my-6 rounded"></v-divider>
  <v-row>
    <v-col v-for="(plan,index) in plans" :key="index" cols="12" md="4">
      <subscription-card
        :title="plan.title"
        :description="plan.description"
        :plans="plan.plans"
        :price="plan.price"
      ></subscription-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import SubscriptionCard from "@/components/SubscriptionCard.vue";

  const plans = [
    {
      title: 'subscription.plans.basic.t',
      description: 'subscription.plans.basic.description',
      price: 50,
      plans: [
        {name: 'subscription.plans.basic.tasks'},
        {name: 'subscription.plans.basic.plan'},
      ]
    },
    {
      title: 'subscription.plans.premium.t',
      description: 'subscription.plans.premium.description',
      price: 50,
      plans: [
        {name: 'subscription.plans.premium.tasks'},
        {name: 'subscription.plans.premium.plan'},
        {name: 'subscription.plans.premium.plan'},
        {name: 'subscription.plans.premium.plan'},
        {name: 'subscription.plans.premium.plan'},
      ]
    },
    {
      title: 'subscription.plans.enterprise.t',
      description: 'subscription.plans.premium.description',
      price: 50,
      plans: [
        {name: 'subscription.plans.premium.tasks'},
        {name: 'subscription.plans.premium.plan'},
        {name: 'subscription.plans.premium.plan'},
        {name: 'subscription.plans.premium.plan'},
        {name: 'subscription.plans.premium.plan'},
        {name: 'subscription.plans.premium.plan'},
        {name: 'subscription.plans.premium.plan'},
      ]
    },
  ]
</script>

<style scoped>

</style>
