/*
 * @Author: tanka
 * @Date: 2023-12-20 23:47:55
 * @LastEditors: tanka
 * @LastEditTime: 2023-12-20 23:48:22
 * @FilePath: /tanka/common/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const conf = require('@umijs/fabric/dist/eslint');
console.log(conf);

class Animal {
  constructor() {
    const a = 123;
    console.log(a);
  }
}
export default Animal;
