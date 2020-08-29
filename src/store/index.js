import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[],
    blogs:[]
  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts;
    },
    SET_BLOGS(state,blogs){
      state.blogs = blogs;
    }
  },
  actions: {
    async loadPosts({commit}){
      return new Promise((resolve)=>{
        api.posts.get().then(res=>{
          commit('SET_POSTS',res);
          resolve(res);
        })
      })
    },
    async loadBlogs({commit}){
      return new Promise((resolve)=>{
        api.blogs.get().then(res=>{
          commit('SET_BLOGS',res);
          resolve(res);
        })
      })
    }
  },
  modules: {
  }
})
