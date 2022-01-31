<template>
  <article>
    <h2 class="text-3xl text-center py-10px">{{ page.titulo }}</h2>
    <div class="w-90vw m-auto py-10px">
      <nuxt-content :document="page" />
    </div>
  </article>
</template>

<script>
export default {
  layout: "pages",
  async asyncData({ $content, params }) {
    const page = await $content('projects', params.slug).fetch()

    return {
      page,
    };
  },
};
</script>
<style></style>