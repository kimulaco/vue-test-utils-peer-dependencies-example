import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('propsのmsgが正しく表示される', () => {
    const msg = 'Hello Vitest'
    const wrapper = mount(HelloWorld, { props: { msg } })
    expect(wrapper.text()).toContain(msg)
  })

  it('ボタンをクリックするとカウントが増える', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })
    const button = wrapper.find('button')
    
    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('count is 0')
    
    await button.trigger('click')
    expect(button.text()).toContain('count is 1')
    
    await button.trigger('click')
    expect(button.text()).toContain('count is 2')
  })

  it('リンクが正しく表示される', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })
    const links = wrapper.findAll('a')
    
    expect(links.length).toBeGreaterThan(0)
    const firstLink = links[0]!
    expect(firstLink.exists()).toBe(true)
    expect(firstLink.attributes('href')).toBeTruthy()
  })

  it('コンポーネントが正しくレンダリングされる', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test Message' } })
    
    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('.card').exists()).toBe(true)
    expect(wrapper.find('.read-the-docs').exists()).toBe(true)
  })
})

