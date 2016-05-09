<script>
  /**
   * tag
   * @module components/core/tag
   * @desc 标签组件，监听删除事件时会显示删除按钮
   * @example
   * <el-core-tag data="hello"></el-core-tag>
   * <el-core-tag @remove="// TODO" data="world"></el-core-tag>
   */
  module.exports = {
    name: 'ElCoreTag',

    props: {
      data: [String, Number]
    }
  };
</script>

<template>
  <button block="element-core-tag">
    <span v-text="data"></span>
    <span
      elem="button"
      v-if="_events.remove"
      @click.stop="$dispatch('remove')">&times;</span>
  </button>
</template>
