import ajax from './ajax';


//获取首页数据
export const reqHomeData = () => ajax('/mock/home')

//获取分类列表
export const reqCateData = () => ajax('/mock/category')

//获取识物
export const reqCateList = () => ajax('/mock/category/list')

//获取识物-导航
export const reqGetNav = () => ajax('/api/topic/v1/find/getTabs.json')

//获取识物-content
export const reqGetContent = () => ajax('/api/topic/v1/find/recManual.json')

//获取关键字
export const reqGetInitSearch=()=>ajax('/api/xhr/search/init.json', 'POST')

//获取搜索结果
export const reqGetSearchResult = (keywordPrefix) => ajax('/api/xhr/search/searchAutoComplete.json', {
  keywordPrefix
})



