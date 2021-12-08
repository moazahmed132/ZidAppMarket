<template>
  <div class="bg-card px-6 py-8 mx-4 my-8 rounded-lg">
    <div class="flex">
      <div class="ml-2">
        <img src="../../assets/images/qomra.png" alt="قمرة" />
      </div>
      <div>
        <div class="flex">
          <div class="ml-6">
            <p class="font-semibold text-purple">{{ appName }}</p>
          </div>
          <div class="flex">
            <img class="ml-2" src="../../assets/images/star.svg" alt="" />
            <span class="text-rate">{{ numberOfStars }}</span>
          </div>
        </div>
        <div class="flex text-sm">
          <p class="ml-1">تطوير:</p>
          <p class="font-light">{{ developerName }}</p>
        </div>
      </div>
    </div>
    <div class="text-xs mt-4 mr-14">
      <p class="mb-2">{{ description }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      required: true,
      default: "",
    },
    appImg: {
      type: String,
      required: true,
      default: "",
    },
    numberOfStars: {
      type: Number,
      required: true,
      default: 0,
    },
    developerName: {
      type: String,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
      default: 0,
    },
  },
};
</script>

<style></style>
