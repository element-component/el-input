import Vue from 'vue'
import ElCompo from './../../src/output.js'

describe('__component_name__', () => {
  it('install method', done => {
    expect(ElCompo).to.respondTo('install')
    done()
  })
})