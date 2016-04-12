<style lang="scss">
  @import "~./style/_dropdown";
  @import "~./style/_input";

  .input {
    @include input(
      "input__original",
      "input--active",
      "input--disabled"
    );
  }

  .input__placeholder {
    left: 4px;
    padding: 0 2px;
    position: absolute;
    top: 10px;
    transition: all .2s ease-out;
    font-size: 12px;
  }

  .input__dropdown {
    @include dropdown();
  }

  .input__option {
    @include dropdown-option('input__option--active');
  }

  .fadeInUp {
    transition: all .2s ease-out;
  }

  .input__placeholder--enter {
    top: -4px;
  }
</style>

<script>
  import VueClickoutside from 'vue-clickoutside';

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
    class="input"
    :class="{
      'input--disabled': disabled,
      'input--active': show
    }"
    v-clickoutside="handleMouseLeave()">
    <span
      v-if="effect === 'special'"
      :class="{ 'input__placeholder--enter': editing || model }"
      class="input__placeholder"
      @click="editing = true, $els.input.focus()"
      v-text="placeholder">
    </span>
    <input
      v-el:input
      @blur="editing = false"
      :type="type || effect"
      v-model="model"
      class="input__original"
      :disabled="disabled"
      :number="effect === 'number'"
      :placeholder="effect === 'special' ? '' : placeholder"
      @focus="editing = true, show = true">

    <ul
      v-show="show"
      class="input__dropdown"><li
        class="input__option"
        :class="{'input__option--active': item === model}"
        v-for="item in suggestion | filterBy model"
        v-text="item"
        @click="model = item, show = false"></li></ul>
  </div>
</template>
