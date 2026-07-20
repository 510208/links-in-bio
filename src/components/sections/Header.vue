<template>
  <!-- 頁首 -->
  <div class="fixed top-8 z-20 flex w-full justify-center px-8">
    <header class="flex w-full max-w-250 justify-between px-0 md:px-4">
      <!-- 左按鈕 -->
      <a
        href="https://510208.github.io"
        class="group flex cursor-pointer items-center gap-4"
      >
        <Button
          class="cursor-pointer rounded-full bg-linear-to-b from-stone-700/60 to-stone-900"
          size="icon-lg"
          variant="outline"
        >
          <Home />
        </Button>
        <span class="hidden font-medium text-stone-300 sm:block">
          Introduction
        </span>
      </a>

      <!-- 右按鈕 -->
      <a
        href="https://github.com/510208/links-in-bio"
        class="group flex cursor-pointer flex-row-reverse items-center gap-4"
      >
        <Button
          class="cursor-pointer rounded-full bg-linear-to-b from-stone-700/60 to-stone-900"
          size="icon-lg"
          variant="outline"
        >
          <GitHubIcon />
        </Button>
        <span class="hidden text-right font-medium text-stone-300 sm:block">
          Source
        </span>
      </a>
    </header>
  </div>
</template>

<script setup>
import { Home } from "lucide-vue-next";
import Button from "../ui/button/Button.vue";
import { GitHubIcon } from "vue3-simple-icons";
</script>
