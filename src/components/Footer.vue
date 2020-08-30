<template>
<footer class="text-muted py-5">
    <cookie-law theme="base">
        <div slot-scope="props">
          <div class="row">
            <div class="col-md-10">
            Notre site et notre application utilise des cookies (pas les gateaux... ), ils ont pour but de nous fournir des statistiques de naviguation afin de connaitre l'utilisation que vous faites de nos services. Ce sont des informations complètement anonyme, et vous pouvez décider de ne pas les divulger en desactivant les cookies de votre naviguateur internet. Sinon vous pouvez aussi consulter nos <router-link tag="a" to="/about">conditions générales</router-link>
            </div>
            <div class="col-md-2 text-right">
            <button class="btn btn-success" @click="props.accept"><span>Ok !</span></button>
            </div>
          </div>
        </div>
    </cookie-law>
    <div class="container">
        <p class="mb-1">Landscaped {{moment().format('YYYY')}}© Tous droits réservés </p>
        <p class="mb-0">Ce projet est Open Source, soutenez nous sur <a target="_blank" href="https://github.com/Simerca" class="btn btn-sm btn-outline-dark">
                <unicon name="github" /> GitHub</a></p>
        <ul class="nav">
            <li class="nav-item">
                <router-link tag="a" to="/about">À propos</router-link>
            </li>
        </ul>
    </div>
</footer>
</template>

<script>
import moment from 'moment';
import CookieLaw from 'vue-cookie-law'

export default {
    components: {
        CookieLaw
    },
    data() {
        return {
            moment: moment,
        }
    }
}
</script>

<style>

</style>
