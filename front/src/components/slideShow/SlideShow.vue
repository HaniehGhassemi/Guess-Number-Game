<template>
  <div class="slideshow-section">
    <Carousel
      :navigation="false"
      :pagination="true"
      :startAutoPlay="true"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img :src="require(`../../assets/images/slider/${slide}.jpg`)" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "@/components/slideShow/Carousel.vue";
import Slide from "@/components/slideShow/Slide.vue";
export default defineComponent({
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const carouselSlides = ["bg-2", "bg-1"];
    return { carouselSlides };
  },
});
</script>

<style lang="scss" src="./SlideShow.scss"></style>
