<template>
<footer class="text-muted py-5">
  <div class="container">
    <p class="mb-1">Landscaped {{moment().format('YYYY')}}© Tous droits réservés </p>
    <p class="mb-0">Ce projet est Open Source, soutenez nous sur <a target="_blank" href="https://github.com/Simerca" class="btn btn-sm btn-outline-dark"><unicon name="github" /> GitHub</a></p>
    <ul class="nav">
        <li class="nav-item"><router-link tag="a" to="/about" >À propos</router-link></li>
    </ul>
  </div>
</footer>
</template>

<script>
import moment from 'moment';
export default {
    data(){
        return {
            moment:moment,
        }
    }
}
</script>

<style>

</style>