<template>
  <div class="flex flex-col items-center gap-2.5">
    <Avatar class="h-25 w-25 shadow-lg">
      <AvatarImage
        src="https://gravatar.com/avatar/f7598bd8d4aba38d7219341f81a162fc842376b3b556b1995cbb97271d9e2915?size=256"
      />
      <AvatarFallback>SH</AvatarFallback>
    </Avatar>
    <h1 class="text-center text-4xl font-bold text-front-100">SamHacker</h1>
    <div class="flex items-center gap-2.5">
      <p class="text-center text-lg text-stone-400">Student</p>
      <SeparatorDot />
      <p class="text-center text-lg text-stone-400">@510208</p>
      <SeparatorDot />
      <p class="text-center text-lg text-stone-400">Taichung, Taiwan</p>
    </div>
  </div>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SeparatorDot from "@/components/ui/separator/SeparatorDot.vue";
</script>
