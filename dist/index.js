/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var compo = __webpack_require__(1);

	compo.install = function (Vue) {
	  Vue.component('el-input', __webpack_require__(1));
	};

	exports.default = compo;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(2)
	__vue_template__ = __webpack_require__(4)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vueClickoutside = __webpack_require__(5);

	var _vueClickoutside2 = _interopRequireDefault(_vueClickoutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	exports.default = {
	  name: 'el-input',

	  props: {
	    placeholder: String,
	    model: {
	      required: true,
	      twoAway: true
	    },
	    suggestion: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    type: String,
	    disabled: Boolean,
	    cache: Boolean,
	    effect: {
	      type: String,
	      default: 'text',
	      validator: function validator(value) {
	        return ['text', 'number', 'special'].indexOf(value) > -1;
	      }
	    }
	  },

	  directives: {
	    clickoutside: _vueClickoutside2.default
	  },

	  data: function data() {
	    return {
	      show: false,
	      editing: false
	    };
	  },


	  methods: {
	    handleMouseLeave: function handleMouseLeave() {
	      this.show = false;

	      if (this.model && this.suggestion.indexOf(this.model) < 0 && this.cache) {
	        this.suggestion.push(this.model);
	      }
	    }
	  }
	};
	// </script>
	//
	// <template>
	//   <div
	//     class="input"
	//     :class="{
	//       'input--disabled': disabled,
	//       'input--active': show
	//     }"
	//     v-clickoutside="handleMouseLeave()">
	//     <span
	//       v-if="effect === 'special'"
	//       :class="{ 'input__placeholder--enter': editing || model }"
	//       class="input__placeholder"
	//       @click="editing = true, $els.input.focus()"
	//       v-text="placeholder">
	//     </span>
	//     <input
	//       v-el:input
	//       @blur="editing = false"
	//       :type="type || effect"
	//       v-model="model"
	//       class="input__original"
	//       :disabled="disabled"
	//       :number="effect === 'number'"
	//       :placeholder="effect === 'special' ? '' : placeholder"
	//       @focus="editing = true, show = true">
	//
	//     <ul
	//       v-show="show"
	//       class="input__dropdown"><li
	//         class="input__option"
	//         :class="{'input__option--active': item === model}"
	//         v-for="item in suggestion | filterBy model"
	//         v-text="item"
	//         @click="model = item, show = false"></li></ul>
	//   </div>
	// </template>

	/* generated by vue-loader */
	// <style lang="scss">
	//   @import "~./style/_dropdown";
	//   @import "~./style/_input";
	//
	//   .input {
	//     @include input(
	//       "input__original",
	//       "input--active",
	//       "input--disabled"
	//     );
	//   }
	//
	//   .input__placeholder {
	//     left: 4px;
	//     padding: 0 2px;
	//     position: absolute;
	//     top: 10px;
	//     transition: all .2s ease-out;
	//     font-size: 12px;
	//   }
	//
	//   .input__dropdown {
	//     @include dropdown();
	//   }
	//
	//   .input__option {
	//     @include dropdown-option('input__option--active');
	//   }
	//
	//   .fadeInUp {
	//     transition: all .2s ease-out;
	//   }
	//
	//   .input__placeholder--enter {
	//     top: -4px;
	//   }
	// </style>
	//
	// <script>

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=input :class=\"{ 'input--disabled': disabled, 'input--active': show }\" v-clickoutside=handleMouseLeave()> <span v-if=\"effect === 'special'\" :class=\"{ 'input__placeholder--enter': editing || model }\" class=input__placeholder @click=\"editing = true, $els.input.focus()\" v-text=placeholder> </span> <input v-el:input @blur=\"editing = false\" :type=\"type || effect\" v-model=model class=input__original :disabled=disabled :number=\"effect === 'number'\" :placeholder=\"effect === 'special' ? '' : placeholder\" @focus=\"editing = true, show = true\"> <ul v-show=show class=input__dropdown><li class=input__option :class=\"{'input__option--active': item === model}\" v-for=\"item in suggestion | filterBy model\" v-text=item @click=\"model = item, show = false\"></li></ul> </div>";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.VueClickOutside = factory());
	}(this, function () { 'use strict';

	  /**
	   * v-clickoutside
	   * @desc 点击元素外面才会触发的事件
	   * @example
	   * ```vue
	   * <div v-element-clickoutside="show = false">
	   * ```
	   */
	  var index = {
	    bind: function bind() {
	      var _this = this;

	      this.handler = function (e) {
	        if (_this.vm && !_this.el.contains(e.target)) {
	          _this.vm.$eval(_this.expression);
	        }
	      };
	      document.addEventListener('click', this.handler);
	    },
	    unbind: function unbind() {
	      document.removeEventListener('click', this.handler);
	    },
	    install: function install(Vue) {
	      Vue.directive('clickoutside', {
	        bind: this.bind,
	        unbind: this.unbind
	      });
	    }
	  };

	  return index;

	}));

/***/ }
/******/ ]);