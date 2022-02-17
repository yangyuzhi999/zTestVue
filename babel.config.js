/*
 * @Author: yangyuzhi
 * @Date: 2021-10-08 14:17:19
 * @LastEditTime: 2022-02-17 08:57:42
 * @LastEditors: yangyuzhi
 * @Descripttion:
 */
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

const plugins = [
  [
    "import",
    {
      libraryName: "ant-design-vue",
      libraryDirectory: "es",
      style: true,
    },
  ],
];

module.exports = {
  presets,
  plugins,
};
