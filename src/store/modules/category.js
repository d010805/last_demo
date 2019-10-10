import {
  RECEIVE_CATEGORY
} from '../mutations-types';

import {
  reqCateData
} from '../../api';




const state = {
  cate:{}
}
const mutations = {
    [RECEIVE_CATEGORY](state, {
      cate
    }) {
      state.cate = cate;
    }
}
const actions = {
  async getCategoryData({
    commit
  }) {
    const result = await reqCateData();
    const cate = result.data
    if (result.code === 0) {
      commit(RECEIVE_CATEGORY, {
        cate
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




