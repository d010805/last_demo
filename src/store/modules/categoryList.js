import {
  RECEIVE_GET_NAV,
  RECEIVE_GET_CONTENT
} from '../mutations-types';

import {
  reqGetNav,
  reqGetContent
} from '../../api';

const state = {
  nav:[],
  content:[]
}
const mutations = {
  [RECEIVE_GET_NAV](state, {
    nav
  }) {
    state.nav = nav;
  },
  [RECEIVE_GET_CONTENT](state, {
    content
  }) {
    state.content = content;
  },
}
const actions = {
  async getRemmendNav({
    commit
  }) {
    const result = await reqGetNav();
    const nav = result.data
    if (result.code === '200') {
      commit(RECEIVE_GET_NAV, {
        nav
      })
    }
  },
  async getRemmendContent({
    commit
  }) {
    const result = await reqGetContent();
    const content = result.data
    if (result.code === '200') {
      commit(RECEIVE_GET_CONTENT, {
        content
      })
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}