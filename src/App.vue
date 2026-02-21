<script setup lang="ts">
import AppContent from "@/components/AppContent.vue";
import BackgroundImage from "@/components/BackgroundImage.vue";
import Introduction from "@/components/sections/Introduction.vue";
import LinksSection from "@/components/sections/LinksSection.vue";

import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";

// 處理Footer
const currentYear = new Date().getFullYear();

// 將年份顯示在Footer中
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

  <main class="flex w-full flex-col items-center">
    <BackgroundImage />

    <AppContent>
      <Introduction />
      <div class="w-full max-w-150">
        <LinksSection />
      </div>
    </AppContent>
  </main>

  <footer class="mb-17.5 text-center text-sm text-stone-500">
    © <span id="sh-year">{{ currentYear }}</span> SamHacker. All rights
    reserved.
  </footer>

  <Toaster position="bottom-center" />
</template>

<style scoped></style>
