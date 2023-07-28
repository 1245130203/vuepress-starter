module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/vuepress-starter/',
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }
  },
  themeConfig: {
    nav: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      {
        text: '前端',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/3d/3d/' },
          { text: 'vite', link: '/vite/' }
        ]
      },
      // NavbarGroup
      {
        text: '关于',
        link: '/about/',
        // children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
    ],
    sidebar: [
      {
        title: '搜索技巧',   // 必要的
        path: '/search',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/search'
        ]
      },
    ]
  }
}