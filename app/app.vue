<template>
  <div class="app-container flex flex-col items-center justify-center mob:overflow-hidden">
    <div class="w-full bg-[#F6F9FA] dark:bg-black flex justify-center flex-col hero-section">
      <div class="w-full flex justify-center">
        <Header
          class="max-w-[1920px] mob:max-w-[360px] w-full"
          @toggle-dark-mode="toggleColorMode"
        />
      </div>
      <div
        id="homepage"
        ref="homePage"
        class="w-full flex justify-center"
      >
        <Homepage
          id="home"
          class="max-w-[1920px] mob:max-w-[360px] w-full"
        />
      </div>
    </div>
    <div class="myWorld-section w-full bg-[#FFFFFF] dark:bg-black flex justify-center">
      <MyWorld class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div
      id="business-journey"
      ref="section1"
      class="journey-section bg-[#F6F9FA] dark:bg-black flex w-full justify-center"
    >
      <Journey class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div
      id="about"
      ref="section2"
      class="about-section bg-[#FFFFFF] dark:bg-black w-full flex justify-center"
    >
      <About class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div
      id="short-history"
      ref="section3"
      class="history-section bg-[#F6F9FA] dark:bg-black w-full flex justify-center"
    >
      <History class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div
      id="gallery"
      ref="section4"
      class="gallery-section bg-[#FFFFFF] dark:bg-black w-full flex justify-center"
    >
      <Gallery class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div
      id="contact-me"
      ref="section5"
      class="contact-section bg-[#F6F9FA] dark:bg-black w-full flex justify-center"
    >
      <Contact class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
    <div class="footer-section bg-[#FFFFFF] dark:bg-black w-full flex justify-center">
      <Footer
        class="max-w-[1920px] mob:max-w-[360px] w-full"
        @toggle-dark-mode="toggleColorMode"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const darkMode = ref(false);

const toggleColorMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&display=swap');
/* Global styles can be defined here */
html {
  scroll-behavior: smooth;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: auto;
}
.logo {
  font-family: "Playwrite US Trad", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.toggle-container{
  background: #147CD1;
  border-radius: 999px;
  cursor: pointer;
}
.container .text{
  font-size: 30px;
  color: #000;
  font-weight: bold;
}
.backgroundDark {
  background-image: url("./assets/images/background.jpg");
}
.button{
  background: linear-gradient(90deg, darkblue, blue);
  width: 30px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  transition: 0.2s;
}
.span{
  position: absolute;
  background-color: #fff;
  width: 90px;
  height: 90px;
  border-radius: 200px;
  margin: 5px;
  transition: all 0.2s ease-out;
}
input {
  display: none;
}
</style>
