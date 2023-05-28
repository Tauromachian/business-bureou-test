<template>
  <AppSection>
    <div class="d-flex justify-center gap-13">
      <AppHeader
        @click="activeTab = 'description'"
        :active="activeTab === 'description'"
      >
        Description
      </AppHeader>
      <AppHeader
        @click="activeTab = 'additional-info'"
        :active="activeTab === 'additional-info'"
      >
        Additional Information
      </AppHeader>
      <AppHeader
        @click="activeTab = 'reviews'"
        :active="activeTab === 'reviews'"
      >
        Reviews
      </AppHeader>
    </div>

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
