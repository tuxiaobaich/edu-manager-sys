import request from '@/utils/request'

// 获取所有博客列表
export const getAllBlogs = (data) => {
  return request({
    method: 'post',
    url: '/api/blog/blogList',
    data
  })
}

// 获取编辑博客页面信息
export const getEditBlogInfo = (id) => {
  return request({
    method: 'GET',
    url: '/api/blog/getEditBlogInfo', // 动态路由
    params: {
      id
    }
  })
}

// 删除文章
export const deleteBlog = id => {
  return request({
    method: 'DELETE',
    url: `/api/blog/${id}`
  })
}

// 发布文章
export const createOrUpdateBlog = (data) => {
  return request({
    method: 'post',
    url: '/api/blog/saveOrUpdate',
    data
  })
}

// 上传图片接口
export const uploadBlogImage = (data, onUploadProgress) => {
  // data 应当为 FormData 对象
  return request({
    method: 'POST',
    url: '/api/blog/upload',
    data,
    // onUploadProgress 用于检测上传进度
    onUploadProgress
  })
}
