<template>
  <div class="flex w-full flex-col items-center gap-4 px-2.5 md:px-0">
    <BigLinkSection />

    <ListLinkSection />
  </div>
</template>

<script setup lang="ts">
import BigLinkSection from "./BigLinkSection.vue";
import ListLinkSection from "./ListLinkSection.vue";
</script>
