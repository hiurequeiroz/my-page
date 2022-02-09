<template>
  <article>

    <span class="w-35px relative top-3 left-2">
    <NuxtLink class="w-35px" to="/">
          <!-- <div class="w-35px flex flex-row gap-1"> -->
            <img
              src="~/assets/back.svg"
              alt="iconeBack"
              class="w-35px h-35px cursor-pointer"
            />
          <!-- </div> -->
    </NuxtLink>
    </span>

    <h2 class="text-3xl text-center pb-2vh">{{ page.titulo }}</h2>
    <div class="w-90vw mx-auto py-10px">
      <nuxt-content class="mx-auto" :document="page" />
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

<style>

  .nuxt-content a {
    color:blue;
  }
  .nuxt-content {
    margin: auto;
  }

</style>
