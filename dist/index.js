(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-clickoutside"));
	else if(typeof define === 'function' && define.amd)
		define("ElSelect", ["vue-clickoutside"], factory);
	else if(typeof exports === 'object')
		exports["ElSelect"] = factory(require("vue-clickoutside"));
	else
		root["ElSelect"] = factory(root["vue-clickoutside"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElInput = __webpack_require__(6);

	module.exports = {
	  ElInput: ElInput,
	  install: function install(Vue) {
	    Vue.component(ElInput.name, ElInput);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<div block=element-core-input :class=\"{\n    'is-disabled': disabled,\n    'is-readonly': readonly,\n    'is-multiple': multiple\n  }\"> <template v-if=multiple> <el-core-tag @remove=tags.$remove(tag) v-for=\"tag in tags\" :data=tag> </el-core-tag> </template> <input elem=original v-el:input v-model=model :type=\"type || 'text'\" :disabled=disabled :readonly=readonly :placeholder=placeholder :number=\"type === 'number'\" @blur=\"$dispatch('e-blur')\" @focus=handleFocus @keydown.down.prevent=\"$dispatch('e-press-down')\" @keydown.up.prevent=\"$dispatch('e-press-up')\" @keyup.enter=\"$dispatch('e-press-enter')\" @keydown.8=handleDelete @keydown.esc=\"$dispatch('e-press-esc')\"> <slot name=icon></slot> </div>";

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<button block=element-core-tag> <span v-text=data></span> <span elem=button v-if=_events.remove @click.stop=\"$dispatch('remove')\">&times;</span> </button>";

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div block=element-input v-clickoutside=handleMouseLeave()> <span v-if=\"effect === 'special'\" :class=\"{ 'is-enter': editing || model }\" elem=placeholder @click=\"editing = true, $els.input.focus()\" v-text=placeholder> </span> <el-core-input :class=\"{\n      'is-active': show\n    }\" @e-blur=\"editing = false\" :type=\"type || effect\" :model.sync=model class=input__original :disabled=disabled :number=\"effect === 'number'\" :placeholder=\"effect === 'special' ? '' : placeholder\" @e-focus=\"editing = true, show = true\"> </el-core-input> <ul v-show=show block=element-dropdown><li block=element-option :class=\"{'is-selected': item === model}\" v-for=\"item in suggestion | filterBy model\" v-text=item @click=\"model = item, show = false\"></li></ul> </div>";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(7)
	__vue_template__ = __webpack_require__(1)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(8)
	__vue_template__ = __webpack_require__(2)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(9)
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(5);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCoreInput',

	  components: {
	    ElCoreTag: _tag2.default
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
	    handleFocus: function handleFocus() {
	      if (!this.readonly) {
	        this.$els.input.select();
	      }
	      this.$dispatch('e-focus');
	    },
	    handleDelete: function handleDelete() {
	      if (this.model && this.model.trim().length !== 0) {
	        return;
	      }

	      this.$dispatch('e-press-delete');
	    }
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'ElCoreTag',

	  props: {
	    data: [String, Number]
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vueClickoutside = __webpack_require__(10);

	var _vueClickoutside2 = _interopRequireDefault(_vueClickoutside);

	var _input = __webpack_require__(4);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-input',

	  components: {
	    ElCoreInput: _input2.default
	  },

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

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }
/******/ ])
});
;