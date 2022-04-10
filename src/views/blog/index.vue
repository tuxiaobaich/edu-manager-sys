<template>
  <div class="blog">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button
          @click="$router.push({ name: 'blog-create' })"
        >添加文章</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="id"
            label="id"
            width="80">
        </el-table-column>
        <el-table-column
            prop="title"
            label="标题"
            width="300">
        </el-table-column>
        <el-table-column
            prop="type_id"
            label="分类"
            width="200">
            <template slot-scope="scope">
                <div @click="changeBlogType(scope.row)" class="change-type">{{ scope.row.typeName }}</div>
            </template>
        </el-table-column>
        <el-table-column
            prop="views"
            label="阅读量">
        </el-table-column>
        <el-table-column
            prop="update_time"
            label="更新时间"
            width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>
import { getAllBlogs, deleteBlog } from '@/services/blog'
import { getTypeList } from '@/services/type'

export default {
  name: 'BlogIndex',
  data () {
    return {
      tableData: [],
      typeList: []
    }
  },
  created () {
    this.loadAllBlogs()
    this.loadTypeList()
  },
  methods: {
    async loadAllBlogs () {
      const { data } = await getAllBlogs({})
      if (data.code === '000000') {
        this.tableData = data.content
      }
      console.log(data)
    },
    handleEdit (rowData) {
      // 设置跳转
      this.$router.push({
        name: 'blog-edit',
        params: {
          id: rowData.id
        }
      })
    },
    handleDelete (rowData) {
      // 删除的确认提示
      this.$confirm('确认删除么', '删除提示')
        .then(async () => {
          // 发送删除请求
          const { data } = await deleteBlog(rowData.id)
          if (data.code === '000000') {
            console.log(data)
            this.$message.success('删除成功')
            // 更新数据列表
            this.loadAllBlogs()
          }
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    },
    // 获取博客分类列表
    async loadTypeList () {
      const { data } = await getTypeList()
      this.typeList = data.content
    }
  }
}
</script>

<style lang="scss" scoped></style>
