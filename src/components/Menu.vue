<template>
<nav class="navbar navbar-light bg-white">
    <div class="container">
        <router-link tag="a" class="navbar-brand" to="/">
            <img src="../assets/logo.png" width="80" height="80" alt="" loading="lazy"> Landscaped
        </router-link>
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><button class="btn btn-sm btn-outline-dark"><unicon name="apple"/> Télécharger sur iOs</button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><button class="btn btn-sm btn-outline-success"><unicon name="android"/> Télécharger sur Android</button></a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
