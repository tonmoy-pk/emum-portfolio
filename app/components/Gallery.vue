<script setup lang="ts">
const emit = defineEmits(['openImage']);
const onSubmit = () => {
  navigateTo('/my-gallery');
}
</script>

<template>
  <div class="flex items-center justify-center mob:px-[16px] mob:py-[64px] gap-[48px] flex-col py-[120px] px-[240px]">
    <div class="flex justify-center items-center flex-col gap-[16px]">
      <div class="flex gap-[24px] items-center mob:items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          class="mob:h-[16px] mob:w-[16px]"
        >
          <path
            d="M24.375 24L0.801777 24C0.690414 24 0.634642 23.8654 0.713388 23.7866L24.2866 0.213387C24.3654 0.134643 24.5 0.190411 24.5 0.301776L24.5 23.875C24.5 23.944 24.444 24 24.375 24Z"
            fill="#147CD1"
          />
        </svg>
        <h1 class="text-[48px] font-bold leading-[64px] dark:text-[#D7D8DD] text-[#262626] mob:text-center mob:text-[30px] mob:leading-[36px] mob:mt-[-6px]">
          My Gallery
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          class="mob:h-[16px] mob:w-[16px]"
        >
          <path
            d="M0.5 23.875V0.301777C0.5 0.190414 0.634642 0.134642 0.713388 0.213388L24.2866 23.7866C24.3654 23.8654 24.3096 24 24.1982 24H0.625C0.555964 24 0.5 23.944 0.5 23.875Z"
            fill="#147CD1"
          />
        </svg>
      </div>
      <p class="w-[1118px] text-center text-[24px] font-light leading-[32px] dark:text-[#D7D8DD] text-[#565656] mob:w-auto mob:text-[16px] mob:leading-[24px]">
        My gallery showcases a vibrant tapestry of artistic expressions,
        featuring diverse creations that captivate and inspire.
      </p>
    </div>
    <div class="grid gap-[24px] grid-cols-4 grid-rows-2 mob:grid-cols-2 mob:grid-rows-4 mob:gap-[16px]">
      <div class="cursor-pointer row-start-1 row-end-3 col-start-1 col-end-3" @click="emit('openImage', { path: '~/assets/images/Gallery/img.png' })">
        <img
          src="~/assets/images/Gallery/img.png"
          alt="loading..."
          class="w-[100%] h-[100%]"
        >
      </div>
      <div class="cursor-pointer row-start-1 row-end-2 col-start-3 col-end-4 mob:row-start-3 mob:row-end-4 mob:col-start-1 mob:col-end-2" @click="emit('openImage', { path: '~/assets/images/Gallery/img_1.png' })">
        <img
          src="~/assets/images/Gallery/img_1.png"
          alt="loading..."
          class="w-[100%] h-[100%]"
        >
      </div>
      <div class="cursor-pointer row-start-1 row-end-2 col-start-4 col-end-5 mob:row-start-3 mob:row-end-4 mob:col-start-2 mob:col-end-3" @click="emit('openImage', { path: '~/assets/images/Gallery/img_2.png' })">
        <img
          src="~/assets/images/Gallery/img_2.png"
          alt="loading..."
          class="w-[100%] h-[100%]"
        >
      </div>
      <div class="cursor-pointer row-start-2 row-end-3 col-start-3 col-end-4 mob:row-start-4 mob:row-end-5 mob:col-start-1 mob:col-end-2" @click="emit('openImage', { path: '~/assets/images/Gallery/img_3.png' })">
        <img
          src="~/assets/images/Gallery/img_3.png"
          alt="loading..."
          class=" w-[100%] h-[100%]"
        >
      </div>
      <div class="cursor-pointer row-start-2 row-end-3 col-start-4 col-end-5 mob:row-start-4 mob:row-end-5 mob:col-start-2 mob:col-end-3" @click="emit('openImage', { path: '~/assets/images/Gallery/img_4.png' })">
        <img
          src="~/assets/images/Gallery/img_4.png"
          alt="loading..."
          class=" w-[100%] h-[100%]"
        >
      </div>
    </div>
    <div class="w-[100%] flex justify-end">
      <CommonExploreButton @click-button="onSubmit"/>
    </div>
  </div>
</template>

<style>
.grid-layout {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.grid-layout-mob {
  grid-template-columns: repeat(2, 1fr) !important;
  grid-template-rows: repeat(4, 1fr) !important;
}
</style>
