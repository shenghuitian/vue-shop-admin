module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  /**
   * "off" 或者 0   //关闭规则
   * "warn" 或者 1  //作为警告
   * "error" 或者 2 //作为一个错误
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0, // 函数括号前的空格检测
    indent: 0 // 缩进检测
  }
}
