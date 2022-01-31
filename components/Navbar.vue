<template>
  <div
    class="h-15vh bg-green-100/60 p-2 flex flex-row justify-around justify-items-center items-end sm:justify-end shadow gap-4"
  >
    <NuxtLink to="/" class="self-center absolute top-5 left-4 sm:left-25">
      <div class="flex flex-row gap-1">
        <img
          src="~/assets/tech-heart.svg"
          alt="iconeHome"
          class="w-35px h-35px cursor-pointer"
        />
        <h1 class="text-green-900 font-helv font-bold text-3xl">Hiure</h1>
      </div>
    </NuxtLink>

    <NuxtLink to="/sobre" class="divicone">
      <div class="divbtn">
        <img src="~/assets/comunidade.svg" alt="iconeSobre" class="icone" />
        <p class="pmenu">About</p>
      </div>
    </NuxtLink>

    <NuxtLink to="/indexproject" class="divicone">
      <div class="divbtn">
        <img src="~/assets/mapa.svg" alt="iconeProjeto" class="icone" />
        <p class="pmenu">Projects</p>
      </div>
    </NuxtLink>

    <NuxtLink to="/blog" class="divicone">
      <div class="divbtn">
        <img src="~/assets/apps.svg" alt="iconeBlog" class="icone" />
        <p class="pmenu">Blog</p>
      </div>
    </NuxtLink>

    <NuxtLink to="/contato" class="divicone">
      <div class="divbtn">
        <img src="~/assets/arvore.svg" alt="iconeContato" class="icone" />
        <p class="pmenu">Contact</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script></script>
<style>
.nuxt-link-exact-active {
  box-shadow: none;
  opacity: 70%;
  cursor: auto;
}
.nuxt-link-exact-active img {
  cursor: auto;
}
.nuxt-link-exact-active p {
  color: rgb(97, 196, 88);
  text-transform: full-width;
}
</style>
