import ListContainers from '@/components/ListContainers'
import { shallowMount } from '@vue/test-utils'

// var users = [{ usern: "Fiat", pass: "123" }, { usern: "Fiat2", pass: "123" }, { usern: "Fiat3", pass: "123" }]

describe('ListContainers.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(ListContainers)
    const title = wrapper.find('#.h3')

    expect(title.textContent.to.equal('Containers List'))
    console.log('Successful 😊')

    // const Constructor = Vue.extend(ListContainers)
    // const vm = new Constructor().$mount()

    // console.log(vm.$el)

    // expect(vm.$el.querySelector('.h3').textContent)
    //   .to.equal('Containers List')
  })
})
