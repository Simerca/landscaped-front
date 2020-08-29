<template>
  <div class="home">
      <Menu />
      <div class="container my-3 col-md-8 mx-auto">
        <router-view/>
      </div>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Menu,
    Footer
  },
  data(){
    return{
      carousel:false,
    }
  }
}
</script>
