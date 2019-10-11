import {
  RECEIVE_GET_INIT,
  RECEIVE_GET_SEARCHRESULT
} from '../mutations-types';

import {
  reqGetInitSearch,
  reqGetSearchResult
} from '../../api';

const state = {
  initSearch:{},
  searchResult:[]
}
const mutations = {
  [RECEIVE_GET_INIT](state, {
    initSearch
  }) {
    state.initSearch = initSearch;
  },
  [RECEIVE_GET_SEARCHRESULT](state, {
    searchResult
  }) {
    state.searchResult = searchResult;
  }
}
const actions = {
  async getInitSearch({
    commit
  }) {
    const result = await reqGetInitSearch();
    const initSearch = result.data
    if (result.code === '200') {
      commit(RECEIVE_GET_INIT, {
        initSearch
      })
    }
  },
  async getsearchResult({
    commit
  }, keywordPrefix) {
    const result = await reqGetSearchResult(keywordPrefix);
    const searchResult = result.data
    if (result.code === '200') {
      commit(RECEIVE_GET_SEARCHRESULT, {
        searchResult
      })
    }
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}