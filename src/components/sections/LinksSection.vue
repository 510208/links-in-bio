<template>
  <div class="flex w-full flex-col items-center gap-4">
    <!-- 大連結區域 -->
    <div class="grid w-full max-w-[1000px] min-w-[400px] grid-cols-2 gap-2.5">
      <FeaturedLink
        href="https://samhacker.dev"
        :icon="Globe"
        label="個人網站"
        title="Introduction"
        :background-image="designImage1"
      />
      <FeaturedLink
        href="https://blog.samhacker.dev"
        :icon="Newspaper"
        label="部落格"
        title="Blog"
        :background-image="designImage2"
      />
    </div>

    <!-- 條列連結區域 -->
    <div class="flex w-full flex-col gap-4">
      <!-- 第一行：兩個Discord按鈕 -->
      <div class="flex justify-between gap-4">
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
      <LinkButton
        href="https://github.com/samhacker"
        :icon="GitHubIcon"
        label="GitHub"
        icon-class="text-white"
      />
      <LinkButton
        href="https://threads.net/@samhacker"
        :icon="ThreadsIcon"
        label="Threads"
        icon-class="text-white"
      />
      <LinkButton
        href="https://instagram.com/samhacker"
        :icon="InstagramIcon"
        label="Instagram"
        icon-class="text-[#E4405F]"
      />
      <LinkButton
        href="https://youtube.com/@samhacker"
        :icon="YouTubeIcon"
        label="YouTube"
        icon-class="text-[#FF0000]"
      />
      <LinkButton
        href="https://wakatime.com/@samhacker"
        :icon="WakaTimeIcon"
        label="WakaTime"
        icon-class="text-white"
      />
      <LinkButton
        href="https://twitter.com/samhacker"
        :icon="XIcon"
        label="Twitter"
        icon-class="text-white"
      />
      <LinkButton
        href="https://figma.com/@samhacker"
        :icon="FigmaIcon"
        label="Figma"
        icon-class="text-[#F24E1E]"
      />
      <LinkButton
        href="https://steamcommunity.com/id/samhacker"
        :icon="SteamIcon"
        label="Steam"
        icon-class="text-white"
      />
      <LinkButton
        href="https://reddit.com/u/samhacker"
        :icon="RedditIcon"
        label="Reddit"
        icon-class="text-[#FF4500]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Globe, Newspaper } from "lucide-vue-next";
import {
  DiscordIcon,
  GitHubIcon,
  ThreadsIcon,
  InstagramIcon,
  YouTubeIcon,
  WakaTimeIcon,
  XIcon,
  FigmaIcon,
  SteamIcon,
  RedditIcon,
} from "vue3-simple-icons";
import FeaturedLink from "./FeaturedLink.vue";
import LinkButton from "./LinkButton.vue";

// 導入背景圖片
import designImage1 from "@/assets/links/mega-link_bg_1.png";
import designImage2 from "@/assets/links/mega-link_bg_2.png";
</script>
