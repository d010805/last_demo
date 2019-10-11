import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';


import category from './modules/category';
import home from './modules/home';
import categoryList from './modules/categoryList';
import Search from './modules/Search';

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    modules:{
        category,
        home,
        categoryList,
        Search
    }
})