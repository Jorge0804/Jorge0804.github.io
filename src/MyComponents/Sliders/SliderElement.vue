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

  .item-custom{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://s1.ppllstatics.com/leonoticias/www/multimedia/202107/06/media/MM-senderismo-asturias/oddle-1-ksRC--1350x900@El%20Comercio.jpg");
  }

  #prueba{
    width: 50vh; 
    height: 30vh;
    background: rgba(79, 120, 255, 0.15);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 25px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .flex-right{
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 0px) and (max-width: 1100px) {
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
                <div class="item-left item-custom" style="flex-grow: 4; background-color: purple;" >
                   <div id="prueba">
                        Hola, texto de prueba, Jorge limites
                   </div>
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