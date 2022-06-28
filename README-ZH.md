# 前端测试题 - 开发一个搜索应用

其他语言版本：[English](./README.md)

我们想让你来开发一个搜索应用来搜索我们平时在 DC 做开发时大多都会用到哪些技术，让我们现在开始吧！

## 物料

- 全部的设计稿都在这里: [打开 Figma 在线预览](https://www.figma.com/file/mcHQ3hMUG0fmgWVh6QPUlv/Frontend-test-What-technologies-we-are-using-at-DC?node-id=71%3A377)，在开发时你应该严格按照上面的尺寸与布局来排版。对了，在打开链接后你应该还需要创建一个自己的账号来获取设计上的精确样式以及尺寸以便帮助你开发。
- 搜索数据应该从这个 API 中获取 [`GET -> https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=flutter`](https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=flutter)
- 应用应该具备 4 种基本状态
    - 用户没有搜索到结果：此时 API 返回了为空的数组数据

      ![用户没有搜索到结果](./assets/examples/has-no-result.png)

    - 用户搜索到了结果：此时 API 返回了有结果的数组数据 

      ![用户没有搜索到结果](./assets/examples/has-results.png)
    
    - 搜索正在进行中：此时 API 正在响应过程中

      ![搜索正在进行中](./assets/examples/searching.png)

    - 搜索时遇到错误：此时服务器返回错误或者请求超时

        *需要注意的是，你得手动将请求参数中的 `no-throttling` 改为 `false` 来让 API 模拟这种情况。*

      ![搜索时遇到错误](./assets/examples/error-while-searching.png)

## 基本规则

- 整个应用应该用 Vue 或者 React 技术栈做开发

- 尽可能的创造可重复利用的通用组件。

- 最少创建三个基本通用组件：

  - 搜索框组件

    ![Search bar](./assets/examples/component-search-bar.png)

  - 标签

    ![Tag](./assets/examples/component-tag.png)

  - 搜索结果单个条目组件

    ![Result item](./assets/examples/component-result-item.png)

- 对于样式代码，你可以遵循你的喜好自由选择 CSS 框架或预处理工具进行编写。在 DC 我们用 Tailwind CSS 和 Sass，但是在这个项目中你可以选用你最拿手的方式。

- 别忘了在你提交的代码包里附带一个 `README.md` 介绍，这个介绍里大概应该包含一些你做某些决策的原因，你想额外的我们表达或者分享的信息（比如哪个地方其实可以继续做优化），以及说明你所选用的脚手架的安装、运行方式以便让我们运行起来并给你的作品打分。

- 当你完成了所有任务后请将项目放进 zip 压缩文件内发送给我们。

## 我们青睐哪种作品

- 清晰的项目结构与逻辑。因为你要知道，相比于写代码来说，读代码可能是更高频的场景。
- 干净利落的 UI 结构、数据流设计以及状态管理。
- 代码洁癖，语法现代。

## 加分项

- 使用 Typescript
- 严格以像素为单位进行 UI 实现
- 用现代的脚手架工具进行构建
- 增加过渡动画
- 增加键盘控制（Tab 键）
- 根据你的想法做额外的功能与界面优化
- ...

## 最终效果


- 正常使用

  ![Normal usage](./assets/examples/demo-normal.gif)

- 错误处理

  ![Error usage](./assets/examples/demo-error.gif)

- 超时处理

  ![Timing out](./assets/examples/demo-timeout.gif)

- 键盘控制处理（如果有最好）

  ![Keyboard control](./assets/examples/demo-keyboard-controls.gif)

---

如果你有任何疑问欢迎随时联系我们 (hello@digitalcreative.asia).

我们非常期待你的成果！
