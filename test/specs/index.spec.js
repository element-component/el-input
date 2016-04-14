import Vue from 'vue'
import ElInput from './../../src/index.js'

Vue.use(ElInput);

describe('el-input', () => {
  it('install', done => {
    expect(ElInput).to.respondTo('install')
    done()
  })

  let vm

  beforeEach(done => {
    vm = new Vue({
      template: `<div>
                  <el-input
                    v-ref:compo
                    :model.sync="model"
                    :cache="cache"
                    :suggestion="suggestion">
                  </el-input>
                </div>`,
      data () {
        return {
          model: '',
          suggestion: [],
          cache: false
        }
      }
    }).$mount()
    done()
  })

  afterEach(done => {
    vm.$destroy()
    done()
  })

  it('model two way', done => {
    vm.model = '123'

    vm.$nextTick(() => {
      expect(vm.$refs.compo.model).to.be.equal('123')
      done()
    })
  })

  it('suggestion option work', done => {
    vm.suggestion = ['a', 'b', 'c']

    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.input__option').length).to.be.equal(3)
      done()
    })
  })

  it('cache work', done => {
    vm.cache = true
    vm.model = 'aaa'

    vm.$nextTick(() => {
      vm.$refs.compo.handleMouseLeave()
      expect(vm.suggestion.length).to.be.equal(1)
      done()
    })
  })
})
