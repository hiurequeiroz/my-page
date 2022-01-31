<template>
  <article class="py-10vh">
    <h2 class="text-3xl text-center pb-2vh">{{ page.titulo }}</h2>
    <div class="w-90vw m-auto py-10px">
      <nuxt-content :document="page" />
    </div>
  </article>
</template>

<script>
export default {
  layout: "pages",
  async asyncData({ $content }) {
    const page = await $content("sobre").fetch();

    return {
      page,
    };
  },
};
</script>

<style></style>
