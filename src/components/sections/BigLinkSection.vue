<template>
  <!-- 大連結區域 -->
  <div
    class="grid w-full grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 sm:grid-rows-1"
  >
    <FeaturedLink
      :href="link.href"
      :icon="link.icon"
      :label="link.label"
      :title="link.title"
      :background-image="link.bgImage"
      v-for="link in config.links.big"
    />
  </div>
</template>

<script setup>
import FeaturedLink from "@/components/ui/linkButton/FeaturedLink.vue";

import { Globe, Newspaper } from "lucide-vue-next";

import config from "@shConfig";
</script>
