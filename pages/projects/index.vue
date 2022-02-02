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

    <h2 class="text-3xl py-20px text-center">Projects</h2>


    <div class="border-2 p-y-2">
        <h3 class="underline text-2xl text-center left-4 sm:left-25" >Community Networks</h3>
        <p class="p-3 md:mx-35">My latest projects related to Community Networks</p>
      <div
        class="flex flex-col lg:flex-row lg:flex-wrap max-w-full lg:max-w-4/5 items-center lg:items-stretch mx-auto py-5vh"
      >
        <div
          v-for="(cnproject, index) in cnprojects"
          :key="index"
          class="w-90vw lg:w-70vw xl:w-1/3 max-w-full md:max-w-1/2 border-2 shadow-xl rounded my-5px bg-green-50"
        >
          <!-- <a target="_blank" :href="project.link" class="flex flex-col sm:flex-row"> -->
          <NuxtLink :to="{ name: 'projects-slug', params: { slug: cnproject.slug } }" class="flex flex-col sm:flex-row">
            <div
              v-if="cnproject.imagem"
              :style="getBackground(cnproject.imagem)"
              alt="imagem cnprojeto"
              class="h-195px sm:h-auto sm:w-1/3 bg-cover bg-center"
            />
            <div class="sm:w-2/3 pl-25px py-25px rounded-3">
              <h3 class="pb-2 text-xl font-semibold">{{ cnproject.titulo }}</h3>
              <p>{{ cnproject.descricao }}</p>
            </div>
          </NuxtLink>
          <!-- </a> -->
        </div>
      </div>
      </div>


    <div class="border-2 p-y-4">
        <h3 class="underline text-2xl text-center left-4 sm:left-25" >Sitio do Astronauta</h3>
      <div
        class="flex flex-col lg:flex-row lg:flex-wrap max-w-full lg:max-w-4/5 items-center lg:items-stretch mx-auto py-5vh"
      >
        <div
          v-for="(sitioproject, index) in sitioprojects"
          :key="index"
          class="w-90vw lg:w-70vw xl:w-1/3 max-w-full md:max-w-1/2 border-2 shadow-xl rounded my-5px bg-green-50"
        >
          <!-- <a target="_blank" :href="project.link" class="flex flex-col sm:flex-row"> -->
          <NuxtLink :to="{ name: 'projects-slug', params: { slug: sitioproject.slug } }" class="flex flex-col sm:flex-row">
            <div
              v-if="sitioproject.imagem"
              :style="getBackground(sitioproject.imagem)"
              alt="imagem sitioprojetos"
              class="h-195px sm:h-auto sm:w-1/3 bg-cover bg-center"
            />
            <div class="sm:w-2/3 pl-25px py-25px rounded-3">
              <h3 class="pb-2 text-xl font-semibold">{{ sitioproject.titulo }}</h3>
              <p>{{ sitioproject.descricao }}</p>
            </div>
          </NuxtLink>
          <!-- </a> -->
        </div>
      </div>


    </div>




</article>
</template>

<script>
import getImage from '../../libs/getImage'

export default {
  layout: "pages",
  async asyncData({ $content, params }) {
    const cnprojects = await $content('projects', params)
    .where({ ativo: { $in: ['sim', 'Sim', 'si', 's'] }, 
             tipo: {$in: ['cn'] } 
            })
    .fetch();
    const sitioprojects = await $content('projects', params)
    .where({ ativo: { $in: ['sim', 'Sim', 'si', 's'] }, 
             tipo: {$in: ['sitio'] } 
            })
    .fetch();
    return {
      cnprojects,
      sitioprojects,
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