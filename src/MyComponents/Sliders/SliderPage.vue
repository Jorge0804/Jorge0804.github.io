<template>
    <Splide :options="options" aria-label="My Favorite Images">
      <SliderElement/>
      <SliderElement/>
    </Splide>
  </template>
  
  <script>
  import { Splide } from '@splidejs/vue-splide';
  import { defineComponent } from 'vue';
  import SliderElement from './SliderElement.vue';
  
  export default defineComponent( {
    components: {
      Splide,
      SliderElement
    },
  
    setup() {
      const options = {
        direction: 'ttb',
        height   : '97vh',
        wheel    : true,
      };
  
      return { options };
    },
  } );
  </script>