import axios from 'axios';

axios.defaults.baseURL = "https://powerful-meadow-14619.herokuapp.com";

const getData = res => res.data || null;

const api = {

    posts:{
        get:()=>
            axios.get('/posts?_limit=12').then(getData)
    },
    blogs:{
        get:()=>
            axios.get('/blogs?_limit=12').then(getData)
    }

}

export default api