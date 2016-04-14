const ElInput = require('./component');

module.exports = {
  ElInput,
  install(Vue) {
    Vue.component('el-input', ElInput);
  }
};
