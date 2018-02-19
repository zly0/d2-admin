// 工具 图表演示页面 路由生成
const maker = (title, name) => {
  return {
    title: title,
    icon: 'file-o',
    path: `demo/${name}`,
    name: `demo-chart-demo-${name}`,
    meta: {
      requiresAuth: true
    },
    component: resolve => { require([`@/pages/demo/chart/demo/${name}.vue`], resolve) }
  }
}

// [图表] 菜单
export const menu = {
  title: '图表',
  path: '/demo/chart',
  name: 'demo-chart',
  meta: {
    requiresAuth: true
  },
  component: resolve => { require(['@/components/core/MainLayout/index.vue'], resolve) },
  children: [
    // 所有
    {
      title: '所有',
      icon: 'file-o',
      path: 'index',
      name: 'demo-chart-index',
      meta: {
        requiresAuth: true
      },
      component: resolve => { require(['@/pages/demo/chart/index/index.vue'], resolve) }
    },
    // 单独演示
    {
      title: '单独演示',
      icon: 'file-o',
      children: [
        maker('面积图', 'areaBase'),
        maker('条形图', 'barBase'),
        maker('柱形图', 'columnBase'),
        maker('折线图', 'lineBase'),
        maker('阶梯折线图', 'lineStep'),
        maker('南丁格尔玫瑰图', 'nightingaleRoseBase'),
        maker('饼图', 'pieBase'),
        maker('雷达图', 'radarBase')
      ]
    }
  ]
}

// [图表] 路由设置
export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
