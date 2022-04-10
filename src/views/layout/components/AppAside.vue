<template>
  <div class="app-aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">后台首页</span>
      </el-menu-item>
      <el-menu-item index="/blog">
        <i class="el-icon-menu"></i>
        <span slot="title">博客管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/blog/create">
        <i class="el-icon-document"></i>
        <span slot="title">撰写博客</span>
      </el-menu-item>
      <el-menu-item index="/type">
        <i class="el-icon-document"></i>
        <span slot="title">分类管理</span>
      </el-menu-item>
      <!-- <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">标签管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">随笔管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">项目管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">广告管理</span>
        </template>
        <el-menu-item index="/advert">
          <i class="el-icon-document"></i>
          <span>广告列表</span>
        </el-menu-item>
        <el-menu-item index="/advert-space">
          <i class="el-icon-document"></i>
          <span>广告位列表</span>
        </el-menu-item>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AppAside'
}
</script>

<style lang="scss" scoped>
.app-aside {
  height: 100%;
  .el-menu {
    height: 100%;
    border-right: 0 none;
  }
}
</style>
