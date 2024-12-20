// import { describe, it, expect } from 'vitest'
// import { mount } from '@vue/test-utils'
// import PostsView from '@/views/PostsView.vue'

// /** simula poblado */
// const postsDummy = [
//   { id: 1, name: 'Post 1' },
//   { id: 2, name: 'Post 2' },
//   { id: 3, name: 'Post 3' },
//   { id: 4, name: 'Post 4' }
// ]
// describe('PostsView.vue', () => {
//   it('renderiza lista de posts', async () => {
//     const wrapper = mount(PostsView)
//     wrapper.setData({ posts: postsDummy })
//     // await wrapper.vm.$nextTick()
//     // ve si existen los <li>
//     expect(wrapper.findAll('li')).toHaveLength(4)
//   })
// })
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PostsView from '@/views/PostsView.vue'

// Datos simulados
const postsDummy = [
  { id: 1, name: 'Post 1' },
  { id: 2, name: 'Post 2' },
  { id: 3, name: 'Post 3' },
  { id: 4, name: 'Post 4' }
]

describe('PostsView.vue', () => {
  it('renderiza correctamente la lista de posts', async () => {
    const wrapper = mount(PostsView)
    await wrapper.setProps({ posts: postsDummy })
    const listItems = wrapper.findAll('li')
    expect(listItems).toHaveLength(postsDummy.length)
  })
})
