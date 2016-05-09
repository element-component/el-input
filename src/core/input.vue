<template>
  <div
    block="element-core-input"
    :class="{
      'is-disabled': disabled,
      'is-readonly': readonly,
      'is-multiple': multiple
    }">
    <template v-if="multiple">
      <el-core-tag
        @remove="tags.$remove(tag)"
        v-for="tag in tags"
        :data="tag">
      </el-core-tag>
    </template>
    <input
      elem="original"
      v-el:input
      v-model="model"
      :type="type || 'text'"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :number="type === 'number'"
      @blur="$dispatch('e-blur')"
      @focus="handleFocus"
      @keydown.down.prevent="$dispatch('e-press-down')"
      @keydown.up.prevent="$dispatch('e-press-up')"
      @keyup.enter="$dispatch('e-press-enter')"
      @keydown.8="handleDelete"
      @keydown.esc="$dispatch('e-press-esc')">
    <slot name="icon"></slot>
  </div>
</template>

<script>
  import ElCoreTag from './tag';
  /**
   * core-input
   * @module components/core/input
   * @param {string} model - 绑定值
   * @param {string} [placeholder] - 输入框占位文本
   * @param {string[]} [tags] - 标签
   * @param {boolean} [disabled=false] - 禁用
   * @param {boolean} [readonly=false] - 只读
   * @param {boolean} [multiple=false] - 多选
   * @param {string} [type=text] - input type
   * @param {function} [e-press-down] - 按下 down 键时会触发的事件
   * @param {function} [e-press-up] - 按下 up 键时会触发的事件
   * @param {function} [e-press-enter] - 按下 enter 键时会触发的事件
   * @param {function} [e-press-esc] - 按下 esc 键时会触发的事件
   */
  export default {
    name: 'ElCoreInput',

    components: {
      ElCoreTag
    },

    props: {
      placeholder: String,
      disabled: Boolean,
      readonly: Boolean,
      multiple: Boolean,
      tags: Array,
      model: [String, null],
      type: String
    },

    methods: {
      handleFocus() {
        if (!this.readonly) {
          this.$els.input.select();
        }
        this.$dispatch('e-focus');
      },

      handleDelete() {
        if (this.model && this.model.trim().length !== 0) {
          return;
        }

        this.$dispatch('e-press-delete');
      }
    }
  };
</script>
