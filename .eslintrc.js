/*
 * @Author: tanka 
 * @Date: 2023-06-16 15:17:05
 * @LastEditors: tanka 
 * @LastEditTime: 2023-09-15 11:40:40
 * @FilePath: /common/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports =  {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: "eslint:recommended",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
        semi: ["error", "always"]
    }
};
