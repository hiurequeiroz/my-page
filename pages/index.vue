<template>
  <main class="w-full">
    <Navbar></Navbar>

    <section class="sec p-y-10 sm:p-y-40">
      <div
        class="flex flex-col items-start justify-items-center gap-y-15px p-25px blur-sm hover:blur-none"
      >
        <h3 class="text-2xl">Hello</h3>
        <h3 class="font-extrabold text-5xl text-left tracking-tighter">I am Hiure Queiroz</h3>
        <!-- <h2 class="font-serif">I am Hiure Queiroz</h2> -->
        <h3 class="text-2xl">Developer / Researcher / Physicist</h3>

        <NuxtLink to="/sobre">
          <div
            class="flex flex-row items-center justify-center h-50px w-200px border-2 rounded-4xl bg-green-300 transform hover:scale-110"
          >
            <p class="align-middle text-center">More about me</p>
          </div>
        </NuxtLink>
      </div>
      <img
        src="~/assets/perfil-colors.png"
        alt="iconeHome"
        class="transform hover:scale-110"
      />
    </section>

    <section class="sec2 bg-green-100/60 p-y-5 pb-20">
      <div
        class="flex flex-col w-full sm:w-80wv sm:flex-row items-center justify-center gap-20"
      >
        <h2 class="font-extrabold text-3xl">Community Networks</h2>
        <img
          src="~/assets/communitynetworks.png"
          alt="imgcomunity"
          class="md:relative md:top-3 md:left-6 self-center transform hover:scale-110"
        />
        <div
          class="flex flex-col items-start justify-center sm:w-350px gap-y-15px lg:p-25px blur-sm hover:blur-none"
        >
            <h3 class="text-center text-2xl">
            Self-governed and owned telecommunications infrastructure.
          </h3>

        </div>
      </div>

      <div class="flex flex-col lg:flex-row w-80wv gap-y-30px sm:gap-x-100px ">
        <lite-youtube class="w-300px"
        videoid="KRib7hyTWMw"
        playlabel="Play: Keynote (Google I/O '18)"
        params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
        ></lite-youtube>

        <lite-youtube class="w-300px"
        videoid="vb9GYb1j85k"
        playlabel="Play: Keynote (Google I/O '18)"
        params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
        ></lite-youtube>

        <lite-youtube class="w-300px"
        videoid="P6YDu3nKNvQ"
        playlabel="Play: Keynote (Google I/O '18)"
        params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
        ></lite-youtube>

      </div>

      <div class="relative top-2">
        <NuxtLink to="/projects">
          <div
            class="flex flex-row items-center justify-center h-50px w-200px border-2 rounded-4xl bg-green-300 transform hover:scale-110"
          >
            <p class="text-center tracking-tighter">Related projects</p>
          </div>
        </NuxtLink>
      </div>

    </section>

    <section class="secreverse my-10 p-y-5 sm:p-y-20">
      <h2 class="md:absolute md:top-430 order-3 font-extrabold text-3xl">My Shared Content</h2>
      <div class="border-2">
        <Timeline id="hiure" sourceType="profile" :options="{ tweetLimit: '2' }"/>
      </div>

      <div
        class="flex flex-col md:self-start items-center gap-y-15px p-25px blur-sm hover:blur-none"
      >
        
        <h3 class="text-center text-2xl">
          Thoughts, tips and tutorials
        </h3>
        
        <NuxtLink to="/blog">
          <div
                class="flex flex-row items-center justify-center h-50px w-150px border-2 rounded-4xl bg-green-300 transform hover:scale-110"
              >
          <p>My Blog</p>
          </div>
        </NuxtLink>
      </div>

      <img
        src="~/assets/blog.png"
        alt="iconeHome"
        class="md:self-start transform hover:scale-110"
      />
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
  async asyncData({ $content }) {
    const page = await $content("index").fetch();
    return {
      page,
    };
  },
  head: {
    link: [
      {
        rel: "stylesheet",
      },
    ],
  },
    components: {
    Timeline,
  },
};
</script>
