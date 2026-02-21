<script setup lang="ts">
import AppContent from "@/components/AppContent.vue";
import BackgroundImage from "@/components/BackgroundImage.vue";
import Introduction from "@/components/sections/Introduction.vue";
</script>

<template>
  <div class="flex flex-col items-center">
    <BackgroundImage />

    <AppContent>
      <Introduction />
    </AppContent>
  </div>
</template>

<style scoped></style>
