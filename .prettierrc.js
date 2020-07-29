module.exports = {
  printWidth: 140, // 超过最大字符数换行
  tabWidth: 2, // tab缩进大小，默认为2
  useTabs: false, // 使用tab缩进，默认false
  semi: false, // 行末加分号, 默认true
  singleQuote: true, // 使用单引号代替双引号, 默认false(在jsx中配置无效, 默认都是双引号)
  /**
   * 行尾逗号，默认none,可选 none | es5 | all
   * es5：包括es5中的数组、对象
   * all：包括函数对象等所有可选
   */
  trailingComma: 'none',
  /**
   * 对象&数组是否追加空格，默认true
   * true: { foo: bar }
   * false: {foo: bar}
   */
  bracketSpacing: true,
  /**
   * JSX标签闭合位置，默认false
   * false: <div
   *          className=""
   *          style={{}}
   *        >
   * true: <div
   *          className=""
   *          style={{}} ></div>
   */
  jsxBracketSameLine: false,
  /**
   * 箭头函数参数括号，默认avoid，可选 avoid | always
   * avoid：能省略括号的时候就省略，例如 x => x
   * always：总是有括号，例如 (x) => x
   */
  arrowParens: 'avoid'
}
