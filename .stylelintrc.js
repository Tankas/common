/*
 * @Author: tanka
 * @Date: 2023-10-19 11:28:26
 * @LastEditors: tanka
 * @LastEditTime: 2023-10-19 11:44:37
 * @FilePath: /common/.stylelintrc.js
 * @Description: css 规则
 */
const fabric = require('@umijs/fabric');

console.log('>>>>>>>');

module.exports = {
  ...fabric.stylelint,
  extends: [...fabric.stylelint.extends],
  plugins: [...fabric.stylelint.plugins],
  rules: {
    ...fabric.stylelint.rules,
    'declaration-empty-line-before': 'never',
  },
  ignoreFiles: [...fabric.stylelint.ignoreFiles, 'src/public/imgs/spritesCss/*.less'],
  // rules: {
  //   "declaration-empty-line-before": 0
  // }
};
