<template>
  <article>

    <span class="relative top-3 left-2">
      <NuxtLink to="/">
            <div class="flex flex-row gap-1">
              <img
                src="~/assets/back.svg"
                alt="iconeBack"
                class="w-35px h-35px cursor-pointer"
              />
            </div>
      </NuxtLink>
    </span>

    <h2 class="text-3xl text-center py-10px">{{ page.titulo }}</h2>

    <div class="flex flex-col lg:flex-row justify-around">

      <div class="md:self-start w-55vw mx-5 py-10px">
        <nuxt-content :document="page" />
      </div>

      <div class="border-2">
        <Timeline id="hiure" sourceType="profile" :options="{ tweetLimit: '3' }"/>
      </div>

    </div>
  </article>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
  layout: "pages",
  async asyncData({ $content }) {
    const page = await $content("contato").fetch();

    return {
      page,
    };
  },
  components: {
    Timeline,
  },
};
</script>
<style></style>
