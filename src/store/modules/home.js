import {
  RECEIVE_HOMEDATA
} from '../mutations-types';

import {
  reqHomeData
} from '../../api';

const state ={
  homeData: {} //商品导航列表
}
const mutations = {
  [RECEIVE_HOMEDATA](state, {homeData}) {
    state.homeData = homeData;
  }
}
const actions={
  async getHomeData({commit}){
    const result = await reqHomeData();
    const homeData=result.data
    if (result.code===0) {
      commit(RECEIVE_HOMEDATA, {homeData})
    }
  }
}
const getters ={}

export default {
  state,
  mutations,
  actions,
  getters
}