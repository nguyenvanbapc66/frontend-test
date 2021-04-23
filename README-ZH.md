# 前端测试题 - 我们在 DC 都用了哪些技术

[English](./README.md)

我们想让你来开发一个搜索组件来搜索我们平时在 DC 做开发时大多都会用到哪些技术，让我们现在开始吧！

## 物料

- 全部设计文档在这里: [查看在 Figma 上的设计稿](https://www.figma.com/file/mcHQ3hMUG0fmgWVh6QPUlv/Frontend-test-What-technologies-we-are-using-at-DC?node-id=71%3A377)，在开发时你应该严格按照上面的尺寸与布局来排版。对了，在打开链接后你应该还需要创建一个自己的账号来获取设计上的精确样式以及尺寸以便帮助你开发（在 Figma 右侧面板上的 CSS 数据仅供参考，不具备实际指导意义，样式该怎么写完全由你决定以及优化）。
- 搜索数据应该从这个 API 中获取 [`GET -> https://frontend-test-api.digitalcreative.cn/?query=flutter`](https://frontend-test-api.digitalcreative.cn/?query=flutter)
- 搜索框应该具备 3 中基本形态
  - [**用户没有搜索到结果**](./assets/examples/no-result.png)：此时 API 返回了为空的数组数据
  - [**用户搜索到了结果**](./assets/examples/has-results.png)：此时 API 返回了有结果的数组数据 
  - [**搜索正在进行中**](./assets/examples/searching.png)：此时 API 正在响应过程中