const ElInput = require('./input');
const ElCoreInput = require('./core/input.vue');

module.exports = {
  ElInput,
  ElCoreInput,
  install(Vue) {
    Vue.component(ElInput.name, ElInput);
  }
};
