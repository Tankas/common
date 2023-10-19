/*
 * @Author: tanka
 * @Date: 2023-10-19 16:21:53
 * @LastEditors: tanka
 * @LastEditTime: 2023-10-19 16:50:18
 * @FilePath: /common/src/index.test.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { describe, expect, test } from '@jest/globals';

const sum2 = (a: number, b: number): number => {
  return a + b;
};

describe('adds 1 + 2 to equal 3', () => {
  expect(sum2(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum2(1, 2)).toBe(3);
});
