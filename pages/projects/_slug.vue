<template>
  <article>

    <span class="w-35px relative top-3 left-2">
    <NuxtLink class="w-35px" to="/projects">
          <!-- <div class="w-35px flex flex-row gap-1"> -->
            <img
              src="~/assets/back.svg"
              alt="iconeBack"
              class="w-35px h-35px cursor-pointer"
            />
          <!-- </div> -->
    </NuxtLink>
    </span>

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
<style>

  .nuxt-content a {
    color:blue;
  }


</style>