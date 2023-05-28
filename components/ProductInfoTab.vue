<template>
  <AppSection>
    <v-tabs hide-slider v-model="activeTab" align-tabs="center" class="mb-10">
      <v-tab value="description">
        <AppHeader> Description </AppHeader>
      </v-tab>
      <v-tab value="additional-info">
        <AppHeader> Additional Information </AppHeader>
      </v-tab>
      <v-tab value="reviews">
        <AppHeader> Reviews </AppHeader>
      </v-tab>
    </v-tabs>

    <VWindow v-model="activeTab">
      <VWindowItem value="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          temporibus fugit rem soluta assumenda? Magni beatae natus consectetur
          facilis amet veritatis vitae quibusdam magnam. Harum deleniti cumque
          adipisci ducimus dolore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          temporibus fugit rem soluta assumenda? Magni beatae natus consectetur
          facilis amet veritatis vitae quibusdam magnam. Harum deleniti cumque
          adipisci ducimus dolore!
        </p>
      </VWindowItem>
      <VWindowItem value="additional-info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          temporibus fugit rem soluta assumenda? Magni beatae natus consectetur
          facilis amet veritatis vitae quibusdam magnam. Harum deleniti cumque
          adipisci ducimus dolore!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          temporibus fugit rem soluta assumenda? Magni beatae natus consectetur
          facilis amet veritatis vitae quibusdam magnam. Harum deleniti cumque
          adipisci ducimus dolore!
        </p>
      </VWindowItem>
      <VWindowItem value="reviews">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          temporibus fugit rem soluta assumenda? Magni beatae natus consectetur
          facilis amet veritatis vitae quibusdam magnam. Harum deleniti cumque
          adipisci ducimus dolore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          temporibus fugit rem soluta assumenda? Magni beatae natus consectetur
          facilis amet veritatis vitae quibusdam magnam. Harum deleniti cumque
          adipisci ducimus dolore!
        </p>
      </VWindowItem>
    </VWindow>
  </AppSection>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(null);
</script>

<style lang="scss" scoped></style>
