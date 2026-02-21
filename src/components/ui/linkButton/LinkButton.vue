<template>
  <a
    :href="href"
    :target="target || '_blank'"
    rel="noopener noreferrer"
    class="group flex w-full items-center justify-between overflow-hidden rounded-lg border border-stone-700 bg-gradient-to-b from-stone-800 to-front-950 px-4 py-2.5 transition-all duration-300 hover:to-front-900"
  >
    <!-- 左側圖標 -->
    <component :is="icon" class="size-5 shrink-0" :class="iconClass" />

    <!-- 中間文字 -->
    <span class="font-inter shrink-0 text-base font-normal text-white">
      {{ label }}
    </span>

    <!-- 右側箭頭 -->
    <ArrowRight
      class="size-4 shrink-0 text-white transition-transform group-hover:translate-x-1"
    />
  </a>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import type { Component } from "vue";

interface Props {
  href: string;
  icon: Component;
  label: string;
  iconClass?: string;
  target?: string;
}

defineProps<Props>();
</script>

<style scoped>
.font-inter {
  font-family: "Inter", sans-serif;
}
</style>
