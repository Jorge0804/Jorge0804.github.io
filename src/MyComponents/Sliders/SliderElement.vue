<style>
.flex {
    display: flex;
    flex-wrap: wrap;
    height: 97vh;
    justify-content: center;
    align-items: center;
  }
   
  .item {
    min-width: 400px;
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

  @media screen and (min-width: 0px) and (max-width: 800px) {
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
                    1
                </div>
                <div class="item-left">
                    1
                </div>
                <div class="item-left">
                    1
                </div>
            </div>
            <div class="item" style="background-color: blue;">2</div>
        </div>
    </SplideSlide>
</template>

<script>
import { SplideSlide } from '@splidejs/vue-splide';

export default{
    name: 'SliderElement',
    components:{
        SplideSlide
    }
}
</script>