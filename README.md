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

### 安装 ElementUI 插件

```
npm i element-ui -S
```

### 按需引入组件

首先，安装 babel-plugin-component：

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

### 安装 axios 依赖

```
npm i axios -S
```

### 将本地代码托管到 github 中

```
git remote add origin git@github.com:shenghui716/vue-shop-admin.git
git push -u origin master
```

### 处理 ESLint 语法报错

针对格式化文档时将单引号转换为双引号和在末尾自动添加分号的问题，在项目根目录下新建 `.prettierrc` 文件，添加如下代码即可：

```
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 200
}
```

针对函数名和括号之间空格的问题，在 `.eslintrc.js` 文件中添加如下代码即可：

```javascript
rules: {
  'space-before-function-paren': 0, // 忽略函数函数括号前空格检测
  'indent': 0, // 忽略缩进检测
}
```
