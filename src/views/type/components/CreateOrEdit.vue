<template>
  <div class="type-create-or-edit">
    <el-card>
      <div slot="header" class="clearfix">
        <span>{{ isEdit ? '编辑分类' : '添加分类' }}</span>
      </div>
      <!-- 步骤对应的表单结构 -->
      <el-form label-width="80px">
        <el-form-item label="分类名称">
          <el-input
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { createOrUpdateType, getEditTypeInfo } from '@/services/type'

export default {
  name: 'TypeCreateOrEdit',
  props: {
    isEdit: {
      type: Boolean,
      // 默认添加功能
      default: false
    }
  },
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  created () {
    this.loadTypeInfo()
  },
  methods: {
    async onSubmit () {
      // 发送请求
      const { data } = await createOrUpdateType(this.form)
      if (data.code === '000000') {
        this.$message.success('提交成功')
        this.$router.push({
          name: 'type'
        })
      }
    },
    async loadTypeInfo () {
      // 检测是否存在路由参数 id, 并进行对应处理
      const id = this.$route.params.id || -1
      const { data } = await getEditTypeInfo(id)
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
