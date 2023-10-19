/*
 * @Author: tanka
 * @Date: 2023-06-16 15:17:05
 * @LastEditors: tanka
 * @LastEditTime: 2023-10-19 17:41:43
 * @FilePath: /common/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'no-empty-pattern': 0,
    'no-param-reassign': 0,
    'no-restricted-globals': 0,
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'object-shorthand': 2,
    'no-empty': 2,
    'no-console': 0,
    'import/newline-after-import': 0, // import 与下边class代码空一行
    yoda: 2,
    'spaced-comment': 2, // 双斜杠后要加空格
    'react-hooks/exhaustive-deps': 0,
    'no-underscore-dangle': 0, // 下划线变量
    'no-restricted-properties': 0,
    'no-else-return': 2,
    radix: 0, // parseInt缺失第二个参数
    'prefer-template': 1,
    'no-nested-ternary': 0,
    'no-restricted-syntax': 0,
    eqeqeq: 2,
    'array-callback-return': 0,
    'consistent-return': 0,
    'no-irregular-whitespace': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'func-names': 1,
    'prefer-arrow-callback': 1,
    'one-var': 0,
    'no-lonely-if': 2,
    'no-await-in-loop': 0,
    'guard-for-in': 1,
    semi: 1, // 不加分号警告
    'no-undef': 2, // 不能有未定义的变量
  },
};
