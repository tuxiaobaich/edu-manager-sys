<template>
  <div class="blog-create-or-edit">
    <el-card>
      <!-- 步骤对应的表单结构 -->
      <el-form label-width="80px">
        <el-form-item label="标题">
          <el-input
            v-model="form.title"
          ></el-input>
        </el-form-item>
        <el-form-item label="文章分类" >
          <el-select v-model="form.type_id" placeholder="请选择">
            <el-option
              v-for="item in typeList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 封装为图片上传组件 -->
        <blog-image
          v-model="form.first_picture"
          label="缩略图"
          :limit="3"
        ></blog-image>
        <el-form-item label="文章内容">
          <mavon-editor v-model="form.content" style="margin: 10px auto;min-height: 70vh"/>
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary" @click="onSubmit">发布文章</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import BlogImage from './BlogImage'
import { createOrUpdateBlog, getEditBlogInfo } from '@/services/blog'

export default {
  name: 'BlogCreateOrEdit',
  components: {
    BlogImage
  },
  data () {
    return {
      form: {
        title: '',
        content: '',
        type_id: '',
        first_picture: ''
      },
      typeList: []
    }
  },
  created () {
    this.loadBlogInfo()
  },
  methods: {
    async onSubmit () {
      // 发送请求
      const { data } = await createOrUpdateBlog(this.form)
      if (data.code === '000000') {
        this.$message.success('提交成功')
        this.$router.push({
          name: 'blog'
        })
      }
    },
    async loadBlogInfo () {
      // 检测是否存在路由参数 id, 并进行对应处理
      const id = this.$route.params.id || -1
      const { data } = await getEditBlogInfo(id)
      if (data.code === '000000') {
        this.typeList = data.typeList
        if (data.blogInfo.length > 0) {
          this.form = data.blogInfo[0]
        }
      }
    }
  }
}
</script>
