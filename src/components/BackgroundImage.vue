<template>
  <div class="absolute top-0 left-0 -z-2 h-[300px] w-full">
    <img
      :src="bgImage"
      alt="Cover Image"
      class="gradient-mask h-full w-full bg-top object-cover"
    />
  </div>
</template>

<script setup lang="ts">
import bgImage from "@/assets/background/background_cover.png";
</script>

<script lang="ts">
document.documentElement.style.setProperty(
  "--vw",
  `${document.documentElement.clientWidth}px`,
);

// 在視窗大小改變時更新 --vw 變數
window.addEventListener("resize", () => {
  document.documentElement.style.setProperty(
    "--vw",
    `${document.documentElement.clientWidth}px`,
  );
});
</script>

<style scoped>
.gradient-mask {
  mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
}
</style>
