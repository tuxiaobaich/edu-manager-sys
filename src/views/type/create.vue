<template>
  <div class="type-create">
    <!-- 将添加功能封装到了单独组件 ./components/CreateOrEdit.vue 中 -->
    <create-or-edit></create-or-edit>
  </div>
</template>

<script>
import CreateOrEdit from './components/CreateOrEdit'
export default {
  name: 'TypeCreate',
  components: {
    CreateOrEdit
  }
}
</script>

<style lang="scss" scoped></style>
