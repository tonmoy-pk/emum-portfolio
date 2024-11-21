<script lang="ts" setup>
import type {Ref} from "vue";
import { useRouter } from 'vue-router';

interface Sections {
  home: Ref<HTMLElement | null>;
  businessJourney: Ref<HTMLElement | null>;
  about: Ref<HTMLElement | null>;
  shortHistory: Ref<HTMLElement | null>;
  gallery: Ref<HTMLElement | null>;
  contactMe: Ref<HTMLElement | null>;
}
const darkMode = ref(false);
const router = useRouter();
const sections: Sections = {
  home: ref(null),
  businessJourney: ref(null),
  about: ref(null),
  shortHistory: ref(null),
  gallery: ref(null),
  contactMe: ref(null)
};
const noHeader = ref(null);
const modalData = ref('');

// const handleIntersection = (entries: any) => {
//   entries.forEach((entry: any) => {
//     if (entry.isIntersecting) {
//       const sectionId = entry.target.id;
//       if (sectionId !== 'home'){
//         router.push({ hash: `#${sectionId}` });
//       } else {
//         router.push({ hash: '' });
//       }
//     }
//   });
// };
const toggleColorMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark')
  }
}
// onMounted(() => {
//   const observer = new IntersectionObserver(handleIntersection, {
//     threshold: 0.4
//   });
//
//   Object.values(sections).forEach(section => {
//     if (section.value) observer.observe(section.value);
//   });
//
//   onBeforeUnmount(() => {
//     observer.disconnect();
//   });
// });
</script>

<template>
  <div class="app-container flex flex-col items-center justify-center mob:overflow-hidden">
    <div :ref="sections.home" id="home" class="w-full bg-[#F6F9FA] dark:bg-[url('~/assets/images/background.jpg')] flex justify-center flex-col hero-section">
      <div class="w-full flex justify-center">
        <Header
            class="max-w-[1920px] mob:max-w-[360px] w-full"
            @toggle-dark-mode="toggleColorMode"
        />
      </div>
      <div class="w-full flex justify-center">
        <Homepage class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
      <div class="myWorld-section w-full bg-[#FFFFFF] dark:bg-black flex justify-center">
        <MyWorld class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
    </div>
    <div :ref="sections.businessJourney" class="journey-section bg-[#F6F9FA] dark:bg-[#171717] flex w-full justify-center" id="business-journey">
      <Journey class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div :ref="sections.about" class="about-section bg-[#FFFFFF] dark:bg-black w-full flex justify-center" id="about">
      <About class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div :ref="sections.shortHistory" class="history-section bg-[#F6F9FA] dark:bg-black w-full flex justify-center" id="short-history">
      <History class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div :ref="sections.gallery" class="gallery-section bg-[#FFFFFF] dark:bg-[#171717] w-full flex justify-center" id="gallery">
      <Gallery class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div :ref="sections.contactMe" class="contact-section bg-[#F6F9FA] flex-col dark:bg-cover dark:bg-[url('~/assets/images/background2.png')] w-full flex justify-center" id="contact-me">
      <Contact class="max-w-[1920px] mob:max-w-[360px] w-full" />
      <div class="footer-section bg-[#FFFFFF] dark:bg-transparent w-full flex justify-center">
        <Footer class="max-w-[1920px] mob:max-w-[360px] w-full" @toggle-dark-mode="toggleColorMode" />
      </div>
    </div>
<!--    <CommonModal-->
<!--        :no-header="noHeader"-->
<!--        :header-text="modalData"-->
<!--    />-->
    <div v-if="openModal">
      <CommonModal v-model="openModal"/>
    </div>
  </div>
</template>

<style scoped>
.dark-bg {
  background-image: url("~/assets/images/background.jpg");
  background-color: black;
}
</style>