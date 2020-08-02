# vue-shop-admin

## 项目安装

```
npm install
```

### 开发环境下编译和热更新

```
npm run serve
```

### 生产环境编译和压缩打包

```
npm run build
```

### 检测和修复文件

```
npm run lint
```

### 自定义配置

查看 [配置参考](https://cli.vuejs.org/config/).

## 项目开发流程

### 基于 Vue-CLI 脚手架创建项目

```
vue create vue-shop-admin
```

### 引入 Element 组件库

首先，安装 ElementUI 插件：

```
npm i element-ui -S
```

其次，安装 `babel-plugin-component` 插件，以达到按需引入组件减小项目体积的目的：

```
npm install babel-plugin-component -D
```

然后，将 babel.config.js 修改为：

```javascript
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
```

最后，新建 `plugins/element.js` 文件，配置按需引入的组件列表，并在 `main.js` 中引入该文件。

```javascript
import './plugins/element.js' // 导入element组件
```

### 引入 Axios 请求库

首先，安装 axios 插件：

```
npm i axios -S
```

其次，新建 `api/http.js` 文件对 axios 请求拦截和响应拦截等进行配置，并对 get、post 等常用请求方法进行二次封装。

然后，新建 `api/index.js` 文件，调用封装好的请求方法对前端 API 进行统一管理。

最后，在 `main.js` 中引入 API 文件，并将前端接口挂载到 Vue 原型对象上。

```javascript
import Api from 'api' // 导入API接口

// 将API接口挂载到Vue原型以便全局使用
Vue.prototype.$api = Api
```

### 引入 Mock 模拟数据

首先，安装 mockjs 插件：

```
npm i mockjs -D
```

其次，新建 `api/mock.js` 文件，配置拦截 Ajax 请求时的行为，并根据数据模板生成模拟数据。

最后，在 `main.js` 中定义开发环境下引入 Mock 数据。

```javascript
// 开发环境下引入 Mock 数据
if (process.env.NODE_ENV === 'development') {
  require('api/mock.js')
}
```

### 配置前端代码统一规范

在项目根目录下新建 `.prettierrc.js` 文件，添加如下代码即可：

```javascript
module.exports = {
  printWidth: 140, // 超过最大字符数换行
  tabWidth: 2, // tab缩进大小，默认为2
  useTabs: false, // 使用tab缩进，默认false
  semi: false, // 行末加分号, 默认true
  singleQuote: true, // 使用单引号代替双引号, 默认false(在jsx中配置无效, 默认都是双引号)
  trailingComma: 'none', // 行尾逗号，默认none,可选 none | es5 | all
  bracketSpacing: true, // 对象&数组是否追加空格
  jsxBracketSameLine: false, // JSX标签闭合位置，默认false
  arrowParens: 'avoid' // 箭头函数参数括号，默认avoid，可选 avoid | always
}
```

针对函数名和括号之间的空格以及缩进问题，在 `.eslintrc.js` 文件中添加如下代码即可：

```javascript
rules: {
  'space-before-function-paren': 0, // 忽略函数函数括号前空格检测
  'indent': 0, // 忽略缩进检测
}
```

### 将本地代码托管到 github 中

```
git remote add origin git@github.com:shenghui716/vue-shop-admin.git
git push -u origin master
```
