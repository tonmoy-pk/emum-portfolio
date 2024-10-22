import import { UnwrapRef from 'vue';
<template>
  <section
    ref="section"
    class="animated-section"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

const section = ref<HTMLElement | null>(null);
const observer = ref<IntersectionObserver | null>(null);

const _observer = useIntersectionObserver(
  section,
  ([{ isIntersecting }], observerElement) => {
    // console.log(observerElement.root);
  },
  {
    threshold: 0.2
  }
);

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.value?.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, { threshold: 0.2 }); // Trigger when 10% of the element is visible

  if (section.value) {
    observer.value.observe(section.value);
  }
});
</script>

<style scoped lang="css">
.animated-section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.animated-section.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
