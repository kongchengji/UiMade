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
        { path: '/guide/useIntroduct', component: r => require.ensure([], () => r(require('../assets/mark/markdown01.md')))   },
        { path: '/guide/design', component: r => require.ensure([], () => r(require('../assets/mark/markdown02.md')))   },
      ]
    },
    {
      path: '/compentList',
      name: 'compentList',
      component: compentList
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: r => require.ensure([], () => r(require('../assets/mark/mark1.md')))      
    },
  ]
})
