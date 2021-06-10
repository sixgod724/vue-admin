import Layout from '@/layout/default'

const componentsRouter = {
  path: '/components',
  name: 'ComponentsDemo',
  component: Layout,
  meta: {
    title: '组件',
    icon: 'el-icon-menu'
  },
  children: [{
    path: 'user',
    name: 'UserDemo',
    component: () => import('@/views/component/user'),
    meta: {
      title: 'User'
    }
  }]
}

export default componentsRouter
