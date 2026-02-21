<template>
  <!-- 條列連結區域 -->
  <div class="flex w-full flex-col gap-4">
    <!-- 第一行：兩個Discord按鈕 -->
    <div class="flex flex-col justify-between gap-4 md:flex-row">
      <LinkButton
        href="https://discord.gg/samhacker"
        :icon="DiscordIcon"
        label="Discord (Main)"
        icon-class="text-[#5865F2]"
      />
      <LinkButton
        href="https://discord.gg/samhacker-alt"
        :icon="DiscordIcon"
        label="Discord (Alt)"
        icon-class="text-[#5865F2]"
      />
    </div>

    <!-- 其他單行按鈕 -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <LinkButton
        :href="link.href"
        :icon="link.icon"
        :label="link.label"
        icon-class="white"
        v-for="link in config.links.list"
      />
    </div>
  </div>
</template>

<script setup>
import LinkButton from "@/components/ui/linkButton/LinkButton.vue";
import config from "@shConfig";

import { DiscordIcon } from "vue3-simple-icons";
</script>
