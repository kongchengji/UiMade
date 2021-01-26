import Vue from 'vue'
import Router from 'vue-router'
import ApiMain from '@/components/ApiMain/ApiMain'

import HelloWorld from '@/components/HelloWorld'
import guide from '@/components/guide/guide'
import compentList from '@/components/component/componentList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ApiMain',
      component: ApiMain
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
      children: [
        // markdown 会被渲染在 guide 的 <router-view> 中
        { path: '/guide/useIntroduct', component: r => require.ensure([], () => r(require('../components/select/wzc-select.md')))   },
        { path: '/guide/design', component: r => require.ensure([], () => r(require('../components/button/wzc-button.md')))   },
      ]
    },
    {
      path: '/compentList',
      name: 'compentList',
      component: compentList,
      children: [ 
        { path: '/compentList/log', component: r => require.ensure([], () => r(require('../components/select/wzc-select.md'))) },
        { path: '/compentList/button', component: r => require.ensure([], () => r(require('../components/button/wzc-button.md'))) },
        { path: '/compentList/select', component: r => require.ensure([], () => r(require('../components/select/wzc-select.md'))) },
        { path: '/compentList/switch', component: r => require.ensure([], () => r(require('../components/Switch/wzc-switch.md'))) },
        { path: '/compentList/slider', component: r => require.ensure([], () => r(require('../components/Slider/wzc-slider.md'))) },
        { path: '/compentList/timeline', component: r => require.ensure([], () => r(require('../components/TimeLine/wzc-timeline.md'))) },
        { path: '/compentList/colorpicker', component: r => require.ensure([], () => r(require('../components/ColorPicker/wzc-color-picker.md'))) }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld      
    },
  ]
})
