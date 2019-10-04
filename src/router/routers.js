export default [
// {
//     path: '/',
//     name: '/',
//     meta: {
//       title: '登入',
//       hideInMenu: true
//     },
//       component: resolve=>require(['@/view/login/login.vue'],resolve)
// },
// {
//   path: '/',
//   name: '/',
//   meta: {
//     title: '登入',
//     hideInMenu: true
//   },
//     component: resolve=>require(['@/view/login/login.vue'],resolve)
// },
{
  path: '/',
  name: '/',
  meta: {
    title: 'index - 首页',
    hideInMenu: true
  },
    component: resolve=>require(['@/view/index/index.vue'],resolve)
},
{
  path: '/portal',
  name: 'portal',
  meta: {
    title: 'index - 首页',
    hideInMenu: true
  },
    component: resolve => require(['@/view/portal/portal.vue'],resolve)
},
{
  path: '/detail',
  name: 'detail',
  meta: {
    title: 'detail-详情',
    hideInMenu: true
  },
    component:resolve => require(['@/view/detail/detail.vue'],resolve)
},
{
  path: '/down',
  name: 'down',
  meta: {
    title: 'down-下载',
    hideInMenu: true
  },
    component: resolve => require(['@/view/down/down.vue'],resolve)
},
{
  path: '/market',
  name: 'market',
  meta: {
    title: 'market-物联商城',
    hideInMenu: true
  },
    component: resolve => require(['@/view/market/market.vue'],resolve)
}
,
{
  path: '/news',
  name: 'news',
  meta: {
    title: 'news-新闻',
    hideInMenu: true
  },
    component:resolve => require(['@/view/news/news.vue'],resolve)
},
{
  path: '/about',
  name: 'about',
  meta: {
    title: 'about-关于我们',
    hideInMenu: true
  },
    component: resolve => require(['@/view/about/about.vue'],resolve)
},

]
