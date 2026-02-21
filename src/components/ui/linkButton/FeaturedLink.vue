<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    role="button"
    class="group relative flex h-50 flex-col items-start justify-end overflow-hidden rounded-lg border border-stone-700 bg-gradient-to-b from-stone-800 to-front-950 p-3.5 transition-all duration-300 hover:to-front-900"
  >
    <!-- 頁首：左側圖標和右側箭頭 -->
    <div
      class="absolute top-6 right-3.5 left-3.5 flex items-center justify-between"
    >
      <component :is="icon" class="size-5 text-stone-200" />
      <ArrowRight
        class="size-4 -translate-x-2 text-stone-200 transition-transform group-hover:translate-x-0"
      />
    </div>

    <!-- 文字內容 -->
    <div class="relative z-10">
      <p class="text-xs font-thin tracking-[7.2px] text-stone-200">
        {{ label }}
      </p>
      <p class="text-2xl font-bold text-[#e2c6b7]">
        {{ title }}
      </p>
    </div>

    <!-- 背景圖片 -->
    <div
      v-if="backgroundImage"
      class="absolute top-[-1px] right-0 -z-0 h-full w-auto opacity-60 mix-blend-lighten transition-all duration-300 group-hover:opacity-100"
    >
      <img
        :src="backgroundImage"
        :alt="title"
        class="h-full w-full object-cover"
      />
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import type { Component } from "vue";

interface Props {
  href: string;
  icon: Component;
  label: string;
  title: string;
  backgroundImage?: string;
}

defineProps<Props>();
</script>
