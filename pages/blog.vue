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

    <h2 class="text-3xl py-20px text-center">Blog</h2>
    <div
      class="flex flex-col lg:flex-row lg:flex-wrap max-w-full lg:max-w-4/5 items-center lg:items-stretch mx-auto py-5vh"
    >

      <div
        v-for="(post, index) in posts"
        :key="index"
        class="w-90vw lg:w-70vw xl:w-1/3 max-w-full md:max-w-1/2 border-2 shadow-xl rounded my-5px bg-green-50"
      >
        <!-- <a target="_blank" :href="post.link" class="flex flex-col sm:flex-row"> -->
        <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug } }" class="flex flex-col sm:flex-row">
          <div
            v-if="post.imagem"
            :style="getBackground(post.imagem)"
            alt="imagem serviço"
            class="h-195px sm:h-auto sm:w-1/3 bg-cover bg-center"
          />
          <div class="sm:w-2/3 pl-25px py-25px rounded-3">
            <h3 class="pb-2 text-xl font-semibold">{{ post.titulo }}</h3>
            <p>{{ post.descricao }}</p>
          </div>
        </NuxtLink>
        <!-- </a> -->
      </div>
    </div>

</article>
</template>

<script>
import getImage from '../libs/getImage'


export default {
  layout: "pages",
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params)
    .where({ ativo: { $in: ['sim', 'Sim', 'si', 's'] } })
    .fetch();
    return {
      posts,
    };
  },
  methods: {
    getBackground(img) {
      return getImage(img, true)
    },
  },

};
</script>
<style></style>