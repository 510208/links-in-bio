<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative flex h-[194px] flex-col items-start justify-end overflow-hidden rounded-lg border border-stone-700 bg-gradient-to-b from-stone-800 to-[#180d07] p-3.5 transition-transform hover:scale-[1.02]"
  >
    <!-- 頁首：左側圖標和右側箭頭 -->
    <div
      class="absolute top-6 left-3.5 flex flex-grow items-center justify-between"
    >
      <component :is="icon" class="size-5 text-stone-200" />
      <ArrowRight
        class="size-4 text-stone-200 transition-transform group-hover:translate-x-1"
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
      class="absolute top-[-1px] right-0 h-[195px] w-[130px] opacity-40 mix-blend-lighten"
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
