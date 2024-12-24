<script setup lang="ts">
import img5 from '@/assets/images/Gallery/img_4.png';

const visibleImages = ref<{}[]>([]);

const modal = ref(false);
const selectedImg = ref();

const imageClick = (event: any) => {
  modal.value = true;
  selectedImg.value = event;
}
const images = ref(
    Array.from({ length: 100 }, (_, index) => ({
      id: index,
      path: img5
    }))
);
const batchSize = 5;
visibleImages.value = images.value.slice(0, batchSize);

const loadMore = () => {
  const nextBatch = images.value.slice(
      visibleImages.value.length,
      visibleImages.value.length + batchSize
  );
  visibleImages.value = [...visibleImages.value, ...nextBatch];
};
</script>

<template>
<div class="flex pt-[108px] mob:pt-[60px] flex-col dark:bg-black min-h-screen pb-24">
  <div class="bg-[url('~/assets/images/gallery-bg.jpg')] bg-no-repeat bg-cover flex items-center justify-center h-[400px] mob:h-[200px]">
    <h1 class="text-6xl mob:text-4xl pb-2 text-white"> Gallery</h1>
  </div>
  <div class="photo-container grid mt-2 mob:mx-2 mob:px-4 mob:py-4 mob:auto-rows-[120px] mob:gap-[3px] gap-[10px] auto-rows-[350px] cursor-pointer mx-32 px-12 py-12 bg-gray-200 dark:bg-[#141821]">
    <div
        v-for="(image, index) in visibleImages"
        :key="image.id"
        :class="(index % 5 === 0 || index % 5 === 2) ? 'col-span-2 row-span-2' : index % 5 === 1 ? 'col-span-2 row-span-1' : (index % 5 === 3 || index % 5 === 4) ? 'col-span-1 row-span-1' : 'col-span-2 row-span-1'"
        @click="imageClick(image.path)"
    >
      <img
          :src="image?.path"
          alt="Loading..."
          class="h-[100%] w-[100%]"
      >
    </div>
  </div>
  <div class="w-full flex justify-center">
    <button
        v-if="visibleImages.length < images?.length"
        class="load-more-btn w-fit flex items-center justify-center"
        @click="loadMore"
    >
      Load More
    </button>
  </div>
  <CommonModal v-model="modal" :image-url="selectedImg" no-header />
</div>
</template>

<style scoped>
.photo-container {
  grid-template-columns: repeat(6, 1fr); /* Default for larger screens */
  border-radius: 1px;
}

.photo-container div {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.load-more-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.photo-container div:hover {
  transform: scale(1.05); /* Scale up slightly on hover */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}

.photo-container div:hover img {
  transform: scale(1.1); /* Slight zoom-in for the image */
}

/* Fade-in Animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
