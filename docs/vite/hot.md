# HMR热更新功能

hmr开启后，修改代码，不会触发页面的重新加载，标签页图标不会变成加载样式

### 如何实现一个简单的热更新

```
import './style.css'

export function render() {
  document.querySelector('#app').innerHTML = `
  <h1>Hello Vite111!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Docum2222e14449999ation</a>
`

}

render()

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render() // 注意闭包特性，这里必须使用newModule中的render
  })
}
```

·
