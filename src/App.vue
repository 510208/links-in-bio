<script setup lang="ts">
import AppContent from "@/components/AppContent.vue";
import BackgroundImage from "@/components/BackgroundImage.vue";
import Introduction from "@/components/sections/Introduction.vue";
import LinksSection from "@/components/sections/LinksSection.vue";

import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";

import { VueLenis, useLenis } from "lenis/vue"; // Also available as global imports, no need to import them manually
import { watch } from "vue";

const lenisOptions = {
  // lenis options (optional)
};

const lenis = useLenis((lenis) => {
  // called every scroll
  console.log(lenis);
});

watch(
  lenis,
  (lenis) => {
    // lenis instance
    console.log(lenis);
  },
  { immediate: true },
);
</script>

<template>
  <VueLenis root :options="lenisOptions" />

  <div class="flex w-full flex-col items-center">
    <BackgroundImage />

    <AppContent>
      <Introduction />
      <div class="w-full max-w-150">
        <LinksSection />
      </div>
    </AppContent>
  </div>

  <Toaster position="bottom-center" />
</template>

<style scoped></style>
