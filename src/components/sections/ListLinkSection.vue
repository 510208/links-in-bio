<template>
  <!-- 條列連結區域 -->
  <div class="flex w-full flex-col gap-4">
    <!-- 第一行：兩個Discord按鈕 -->
    <div class="flex flex-col justify-between gap-4 md:flex-row">
      <LinkButton
        href="#"
        :icon="DiscordIcon"
        label="@samhacker (Main)"
        target="_self"
        id="sh-discord-main"
        @click="() => copyToClipboard('samhacker')"
      />
      <LinkButton
        href="#"
        :icon="DiscordIcon"
        label="@samhacker_test (Alt)"
        target="_self"
        id="sh-discord-alt"
        @click="() => copyToClipboard('samhacker_test')"
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

<script>
import { toast } from "vue-sonner";

// 點擊Discord按鈕時複製對應的帳號到剪貼簿
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    () => {
      toast.success(`已複製 ${text} 到剪貼簿！`);
    },
    (err) => {
      console.error("無法複製到剪貼簿: ", err);
    },
  );
}
</script>
