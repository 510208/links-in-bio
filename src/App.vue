<script setup lang="ts">
import AppContent from "@/components/AppContent.vue";
import BackgroundImage from "@/components/BackgroundImage.vue";
import Introduction from "@/components/sections/Introduction.vue";
import LinksSection from "@/components/sections/LinksSection.vue";
</script>

<template>
  <div class="flex flex-col items-center">
    <BackgroundImage />

    <AppContent>
      <Introduction />
      <div class="w-full max-w-150">
        <LinksSection />
      </div>
    </AppContent>
  </div>
</template>

<style scoped></style>
