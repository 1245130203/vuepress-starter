### globimport

globimport可以用于快速引入一系列文件，例如，使用在引入多语言文件

vite中，如何使用？

```
// 使用方法一
const globModules = import.meta.glob('./glob/*')

Object.entries(globModules).forEach(([k, v]) => {
  v().then(m => console.log(k + ':' + m.default))
})


// 使用方法二
const globs = import.meta.globEager('./glob/*')
```

### 预编译
