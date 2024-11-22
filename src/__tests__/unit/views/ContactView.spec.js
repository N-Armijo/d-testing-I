import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/views/ContactView.vue'

describe('ContactView.vue', () => {
  it('Contrasta Snapshot del HTML', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
