var compo = require('./index');

compo.install = function(Vue) {
  Vue.component('el-input', require('./index'));
};

export default compo;

