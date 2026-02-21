<template>
  <div class="absolute top-0 left-0 -z-2 h-[300px] w-screen opacity-40">
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

<style scoped>
.gradient-mask {
  mask-image: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
