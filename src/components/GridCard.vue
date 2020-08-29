<template>
<div class="row row-cols-1 row-cols-md-3 rows-col-lg-4 rows-cols-xs-2 g-4">
    <div class="col" v-for="(post,i) in posts" :key="i">
        <div class="card shadow-sm rounded">
            <img :src="post.Image.formats.small.url" class="card-img-top" alt="post image">
            <div class="card-body">
                <h5 class="card-title">
                    <template v-if="post.user.avatar">
                        <img :src="post.user.avatar.url" style="height:50px; width:50px; object-fit:cover; object-position:center;" alt="user-avatar" class="rounded-circle img-fluid">
                    </template>
                    <template v-else>
                        <img src="https://via.placeholder.com/300" style="height:50px; width:50px; object-fit:cover; object-position:center;" alt="no-user-avatar" class="rounded-circle img-fluid">
                    </template>
                    {{ post.user.username }}</h5>
                <p class="card-text">{{ post.Content }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    computed: {
        ...mapState(['posts'])
    },
    watch: {
        posts: function (newVal) {
            console.log(newVal);
        }
    }
}
</script>

<style>

</style>
