<style>
.flex {
    display: flex;
    flex-wrap: wrap;
    height: 97vh;
    justify-content: center;
    align-items: center;
  }
   
  .item {
    min-width: 50%;
    flex-grow: 1;
    text-align: center;
    font-size: 50px;
    height: 97vh;
  }

  .flex-left{
    background-color: red; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .item-left{

  }

  .flex-right{
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 0px) and (max-width: 900px) {
    .item{
        height: 49vh;
    }
  }
</style>

<template>
    <SplideSlide>
        <div class="flex">
            <div class="item flex-left">
                <div class="item-left">
                   <img style="width: 10vh;" src="../../assets/logo.png"/>
                </div>
                <div class="item-left">
                    1
                </div>
                <div class="item-left">
                    1
                </div>
            </div>
            <div class="item flex-right" style="background-color: blue;">
                <div class="item-left" style="flex-grow: 1; background-color: green;">
                    1
                </div>
                <div class="item-left" style="flex-grow: 4; background-color: purple;">
                    1
                </div>
                <div class="item-left" style="flex-grow: 2; background-color: gray;">
                    
                </div>
            </div>
        </div>
    </SplideSlide>
</template>

<script>
import { SplideSlide, Splide } from '@splidejs/vue-splide';

export default{
    name: 'SliderElement',
    components:{
        SplideSlide,
        Splide
    },
    setup(){
        const options = {
            type   : 'loop',
            drag   : 'free',
            snap   : true,
            perPage: 4,
            focus  : 'center',
        }

        return {options};
    }
}
</script>