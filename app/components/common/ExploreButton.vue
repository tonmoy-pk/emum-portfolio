<script setup lang="ts">
interface Props {
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Explore Now'
});
const emit = defineEmits(['clickButton']);
</script>

<template>
  <button class="w-max hover:scale-105 hover:shadow-lg transition-transform duration-200
    ease-in-out hover:bg-blue-700 hover:text-white flex items-center dark:text-[#D7D8DD] dark:border-[#D7D8DD] gap-[10px] leading-[24px]
    text-[16px] border-solid border-[1.5px] border-black px-[16px] py-[12px] mob:leading-[20px]"
          @click="emit('clickButton')"
  >
    {{ text }}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
    >
      <path
          d="M4.00016 4V5.33333H9.72683L3.3335 11.7267L4.2735 12.6667L10.6668 6.27333V12H12.0002V4H4.00016Z"
          fill="#262626"
          class="dark:fill-[#D7D8DD]"
      />
    </svg>
  </button>
</template>

<style scoped>

</style>