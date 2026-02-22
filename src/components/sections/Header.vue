<template>
  <!-- 頁首 -->
  <div class="fixed top-8 z-20 flex w-full justify-center px-8">
    <div class="flex w-full max-w-250 justify-between">
      <!-- 左按鈕 -->
      <a
        href="https://510208.github.io"
        class="group flex items-center gap-4 md:w-10"
      >
        <Button
          class="rounded-full bg-linear-to-b from-stone-700/60 to-stone-900"
          size="icon-lg"
          variant="outline"
        >
          <Home />
        </Button>
        <span class="hidden font-medium text-stone-300 sm:block">
          Introduction
        </span>
      </a>

      <div class="flex items-center">
        <h2
          class="hidden text-center text-2xl font-extralight tracking-wide text-stone-300 uppercase md:block"
        >
          SamHacker
        </h2>
      </div>

      <!-- 右按鈕 -->
      <a
        href="https://510208.github.io"
        class="group flex flex-row-reverse items-center gap-4 md:w-10"
      >
        <Button
          class="rounded-full bg-linear-to-b from-stone-700/60 to-stone-900"
          size="icon-lg"
          variant="outline"
        >
          <GitHubIcon />
        </Button>
        <span class="hidden text-right font-medium text-stone-300 sm:block">
          Source
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { Home } from "lucide-vue-next";
import Button from "../ui/button/Button.vue";
import { GitHubIcon } from "vue3-simple-icons";
</script>
