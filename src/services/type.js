import request from '@/utils/request'

// 获取文章分类列表
export const getTypeList = (data) => {
  return request({
    method: 'post',
    url: '/api/type/typeList',
    data
  })
}

// 获取编辑分类页面信息
export const getEditTypeInfo = (id) => {
  return request({
    method: 'GET',
    url: '/api/type/getEditTypeInfo', // 动态路由
    params: {
      id
    }
  })
}

// 增加或更新分类
export const createOrUpdateType = (data) => {
  return request({
    method: 'post',
    url: '/api/type/saveOrUpdate',
    data
  })
}

// 删除分类
export const deleteType = id => {
  return request({
    method: 'DELETE',
    url: `/api/type/${id}`
  })
}
