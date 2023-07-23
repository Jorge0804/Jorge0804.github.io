<template>
    <!--<SocialMain/>-->
    <Slider style="background-color: green"/>
</template>

<script>
import SocialMain from './MyComponents/Social/SocialMain.vue';
import Slider from './MyComponents/Sliders/SliderPage.vue';

export default{
    name: "Home",
    components: {
        SocialMain,
        Slider
    }
}
</script>