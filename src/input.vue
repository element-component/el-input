<script>
  import VueClickoutside from 'vue-clickoutside';
  import ElCoreInput from './core/input';

  /**
   * input
   * @module components/basic/input
   * @param {(string|number)} model - 绑定值
   * @param {string} [placeholder] - 输入框占位文本
   * @param {string[]} [suggestion] - 输入建议
   * @param {boolean} [disabled=false] - 是否禁用
   * @param {boolean} [cache=false] - 是否需要缓存
   * @param {string} [effect=text] - 输入框效果，允许 text, number, special
   * @example
   * ```html
   * <el-input :suggestion="['内容1', '内容2', '内容3']"></el-input>
   * ```
   */
  export default {
    name: 'el-input',

    components: {
      ElCoreInput
    },

    props: {
      placeholder: String,
      model: {
        required: true,
        twoAway: true
      },
      suggestion: {
        type: Array,
        default() {
          return [];
        }
      },
      type: String,
      disabled: Boolean,
      cache: Boolean,
      effect: {
        type: String,
        default: 'text',
        validator(value) {
          return [
            'text',
            'number',
            'special'
          ].indexOf(value) > -1;
        }
      }
    },

    directives: {
      clickoutside: VueClickoutside
    },

    data() {
      return {
        show: false,
        editing: false
      };
    },

    methods: {
      handleMouseLeave() {
        this.show = false;

        if (this.model && this.suggestion.indexOf(this.model) < 0 && this.cache) {
          this.suggestion.push(this.model);
        }
      }
    }
  };
</script>

<template>
  <div
    block="element-input"
    v-clickoutside="handleMouseLeave()">

    <span
      v-if="effect === 'special'"
      :class="{ 'is-enter': editing || model }"
      elem="placeholder"
      @click="editing = true, $els.input.focus()"
      v-text="placeholder">
    </span>
    <el-core-input
      :class="{
        'is-active': show
      }"
      @e-blur="editing = false"
      :type="type || effect"
      :model.sync="model"
      class="input__original"
      :disabled="disabled"
      :number="effect === 'number'"
      :placeholder="effect === 'special' ? '' : placeholder"
      @e-focus="editing = true, show = true">
    </el-core-input>
    <ul
      v-show="show"
      block="element-dropdown"><li
        block="element-option"
        :class="{'is-selected': item === model}"
        v-for="item in suggestion | filterBy model"
        v-text="item"
        @click="model = item, show = false"></li></ul>
  </div>
</template>
