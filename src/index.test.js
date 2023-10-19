/*
 * @Author: tanka
 * @Date: 2023-10-19 16:19:17
 * @LastEditors: tanka
 * @LastEditTime: 2023-10-19 16:20:49
 * @FilePath: /common/src/index.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const sum = (a, b) => {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
