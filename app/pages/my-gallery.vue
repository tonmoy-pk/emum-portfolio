<script setup lang="ts">
import img1 from '../assets/images/Gallery/img.png';
import img2 from '@/assets/images/Gallery/img_1.png';
import img3 from '@/assets/images/Gallery/img_2.png';
import img4 from '@/assets/images/Gallery/img_3.png';
import img5 from '@/assets/images/Gallery/img_4.png';
import img6 from '@/assets/images/img_1.png';
import img7 from '@/assets/images/Gallery/img_4.png';

const modal = ref(false);
const selectedImg = ref();

const imageData = ref([
  { id: 1, path: img1 },
  { id: 2, path: img2 },
  { id: 3, path: img4 },
  { id: 4, path: img3 },
  { id: 5, path: img5 },
  { id: 6, path: img6 },
  { id: 7, path: img7 }
]);
const imageClick = (event: any) => {
  modal.value = true;
  selectedImg.value = event;
}

</script>

<template>
<div class="flex flex-col px-[30px] py-[20px] dark:bg-black min-h-screen">
  <div class="">
    <h1 class="text-6xl pb-2 dark:text-white">Gallery</h1>
  </div>
  <div class="photo-container grid mt-2 mob:grid-cols-2 cursor-pointer">
    <div
        v-for="image in imageData"
        :key="image.id"
        class="rounded"
        @click="imageClick(image.path)"
    >
      <img
          :src="image?.path"
          alt="Loading..."
          class="h-[100%] w-[100%] rounded"
      >
    </div>
  </div>
  <CommonModal v-model="modal" :image-url="selectedImg" no-header />
</div>
</template>

<style scoped>
.photo-container {
  grid-template-columns: repeat(6, 1fr); /* Default for larger screens */
  grid-auto-rows: 280px;
  gap: 15px;
  border-radius: 12px;
}

.photo-container div {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
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

.photo-container div:hover {
  transform: scale(1.05); /* Scale up slightly on hover */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}

.photo-container div:hover img {
  transform: scale(1.1); /* Slight zoom-in for the image */
}

@media (max-width: 1024px) {
  .photo-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .photo-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .photo-container {
    grid-template-columns: repeat(2, 1fr);
  }
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
