<template>
<div class="blog row row-cols-1 row-cols-md-1 g-4">
    <div class="col" v-for="(blog,i) in blogs" :key="i">
        <div class="card shadow-sm rounded">
            <img :src="blog.Images[0].url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">
                    {{ blog.Title }}
                </h5>
                <p class="card-text">{{ blog.Content }}</p>
            </div>
            <div class="card-footer">
                <i class="text-muted">Publié le {{ moment(blog.created_at).format('DD MM YYYY à HH:mm') }}</i>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import moment from 'moment';
export default {
    computed: {
        ...mapState(['blogs'])
    },
    data(){
        return {
            moment:moment
        }
    },
    watch: {
        posts: function (newVal) {
            console.log(newVal);
        }
    }
}
</script>

<style lang="scss">

    .blog {
        .card-img-top{
            height:300px;
            object-fit: cover;
            object-position: center;
        }
    }

</style>
