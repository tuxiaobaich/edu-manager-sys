<template>
  <div class="type">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button
          @click="$router.push({ name: 'type-create' })"
        >添加分类</el-button>
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
            prop="name"
            label="分类名称"
            width="300">
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
import { getTypeList, deleteType } from '@/services/type'

export default {
  name: 'TypeIndex',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.loadAllTypes()
  },
  methods: {
    async loadAllTypes () {
      const { data } = await getTypeList({})
      if (data.code === '000000') {
        this.tableData = data.content
      }
    },
    handleEdit (rowData) {
      // 设置跳转
      this.$router.push({
        name: 'type-edit',
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
          const { data } = await deleteType(rowData.id)
          if (data.code === '000000') {
            console.log(data)
            this.$message.success('删除成功')
            // 更新数据列表
            this.loadAllTypes()
          }
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
