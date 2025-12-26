import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WrapperComponent from './WrapperComponent.vue'

describe('WrapperComponent', () => {
  it('renders slot content correctly', () => {
    const slotContent = '<p>Custom Content</p>'
    const wrapper = mount(WrapperComponent, {
      slots: {
        default: slotContent,
      },
    })

    expect(wrapper.html()).toContain('Custom Content')
    expect(wrapper.text()).toContain('Custom Content')
  })

  it('works correctly when slot is empty', () => {
    const wrapper = mount(WrapperComponent)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toBe('')
  })

  it('renders multiple slot contents correctly', () => {
    const wrapper = mount(WrapperComponent, {
      slots: {
        default: '<div>Content 1</div><div>Content 2</div>',
      },
    })

    expect(wrapper.text()).toContain('Content 1')
    expect(wrapper.text()).toContain('Content 2')
  })
})
