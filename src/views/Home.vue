<template>
  <div class="home">
      <Menu />
      <Carousel v-if="carousel"/>
      <Jumbotron />
      <FloatingTab/>
      <div class="container my-3 col-md-8 mx-auto">
        <router-view/>
      </div>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';
import Carousel from '@/components/Carousel.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import FloatingTab from '@/components/FloatingTab.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    Carousel,
    Jumbotron,
    FloatingTab,
    Footer
  },
  data(){
    return{
      carousel:false,
    }
  }
}
</script>
