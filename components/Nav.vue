<template>
  
    <div
      class="w-full flex flex-row items-center"
    >
    <div
      class="flex flex-col items-center gap-y-15px p-25px blur-sm hover:blur-none cursor-pointer"
    >
      <h2 class="font-extrabold uppercase">{{ nome }}</h2>
      <NuxtLink :to="link">
      <div
        :style="icone"
        class="h-150px w-150px bg-cover transform hover:scale-110"
      ></div>
     </NuxtLink>
    </div>
     <p>{{ detalhe }}</p>
    </div>
  
</template>

<script>
import getImage from "../libs/getImage";

export default {
  props: {
    nome: String,
    ilustra: String,
    detalhe: String,
    index: Number,
  },
  data() {
    return {
      icone: getImage(this.ilustra, true),
    };
  },
  computed: {
    link() {
      switch (this.index) {
        case 0:
          return "/sobre";
        default:
          return "/";
        case 1:
          return "/apps";
        case 2:
          return "/contato";
      }
    },
  },
};
</script>
