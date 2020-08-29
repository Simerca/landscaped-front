<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
export default {
  mounted(){
    this.$store.dispatch('loadPosts')
    this.$store.dispatch('loadBlogs')
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
body {
font-family: 'Open Sans', sans-serif;
}

</style>
