import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  it('Contrasta Snapshot del HTML', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
