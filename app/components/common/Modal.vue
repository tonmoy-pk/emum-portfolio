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
  <div class="modal-overlay">
    <div
        class="modal-content dark:bg-gray-900 bg-white flex flex-col justify-center items-center gap-6 px-8 py-10 dark:text-white"
        @click.stop
    >
      <div class="relative w-full">
        <span
            class="close-button"
            @click="openModal = false"
        >
          x
        </span>
      </div>
      <h3 v-if="!noHeader" class="modal-header">{{ headerText }}</h3>
      <p v-if="!imageUrl" class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
      </p>
      <img v-if="imageUrl" :src="imageUrl" alt="Image" class="rounded" />
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  border-radius: 10px;
  max-width: 1000px;
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
  position: absolute;
  top: -20px;
  right: -20px;
  height: 40px;
  width: 40px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: gray;
  color: white;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
}

.modal-header {
  font-size: 24px;
  text-align: center;
}

.modal-body {
  font-size: 16px;
  text-align: justify;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .modal-content {
    padding: 20px;
    max-width: 95%;
  }

  .close-button {
    top: -15px;
    right: -15px;
    height: 30px;
    width: 30px;
    font-size: 16px;
  }

  .modal-header {
    font-size: 18px;
  }

  .modal-body {
    font-size: 14px;
  }
}
</style>
