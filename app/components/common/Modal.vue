<script setup lang="ts">
const emit = defineEmits(['closeModal', 'confirm']);
interface Props {
  noHeader?: boolean;
  headerText?: string;
  imageUrl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  noHeader: false,
  headerText: 'This is a default message',
});
const openModal = defineModel();

const showModal = ref(false);

function closeModal() {
  showModal.value = false;
}
</script>


<template>
  <div v-if="openModal" class="modal-overlay mob:h-[100px] mob:max-w-[500px]">
    <div class="modal-content dark:bg-gray-900 bg-white flex flex-col justify-center items-center gap-[30px] px-[80px] py-[40px] dark:text-white" @click.stop>
      <div class="relative"><span class="absolute h-[50px] w-[50px] text-4xl font-light flex justify-center items-center rounded-[30px] pb-[2px] left-[27rem] bottom-[-2rem] cursor-pointer border-b border-gray-600 text-gray-500 border-2 bg-gray" @click="openModal=false">x</span></div>
      <h3 v-if="!noHeader" class="text-6xl">{{ headerText }}</h3>
      <p v-if="!imageUrl" class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae optio quaerat reiciendis sequi suscipit. Architecto asperiores assumenda atque deserunt ducimus facilis harum illum ipsa labore laboriosam nulla numquam officia perspiciatis quae sapiente sed totam unde vero voluptas, voluptatibus? Atque aut, blanditiis commodi cumque deleniti dolore dolores doloribus est fugiat id ipsa iste libero magni minus natus nesciunt nobis optio perferendis perspiciatis quae quos repellat repudiandae, sequi. A animi, asperiores aut cum dignissimos id itaque libero magni nam necessitatibus perspiciatis quas quidem quod repudiandae sapiente, sint vel? Asperiores distinctio eligendi, ipsa libero molestiae non placeat rem sapiente? Alias eum, maxime.
        Aperiam commodi culpa eaque eos ex facilis, harum illum incidunt iste maiores mollitia nobis pariatur quo totam
        voluptatum! Aliquam culpa nulla sequi!</p>
      <img v-if="imageUrl" :src="imageUrl" alt="loading" class="rounded"/>
    </div>
  </div>
</template>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000000000000000000000000000;
}

.modal-content {
  border-radius: 10px;
  //opacity: .5;
  max-width: 1000px; /* Adjust the size as needed */
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
