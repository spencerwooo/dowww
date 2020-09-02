---
sidebar: auto
---

# 贡献指南

👍🎉💖 Hi，感谢你对这个项目感兴趣。💖 🎉 👍

下面是一些内容、规范等等，来帮助你更好的对这个项目进行贡献。包括但不限于：如何增加一篇新文章、如何对文章内容进行更新更正、文章的行文规范等等。当然，值得注意的是：下面这些内容仅仅是规范而非规则。欢迎来一起完善这个项目！

## 在贡献之前，我应该了解些什么？

### Code of Conduct

请先看看我们的行为准则 - [Code of Conduct](https://github.com/spencerwooo/dowww/blob/master/.github/CODE_OF_CONDUCT.md)，并保证贡献内容符合这些规范。如果发现项目中出现了不符合这些规则的内容，欢迎反馈内容。

### 开发路线

目前 WSL 在不断更新迭代，那么本项目会尽量的跟随 WSL 的开发进行更新。包括但不限于：WSL 发行版下载方式的更新、终端的推荐更新、VSCode 本身的更新、VSCode 插件的更新等等。希望有一天，WSL 不再需要更多配置就可以无缝完美使用。

## 我应该从哪里下手？

### 反馈问题

最简单的方法就是，当你在配置过程中，出现了任何的问题，请直接去 [Issue 区](https://github.com/spencerwooo/dowww/issues/new/choose) 进行反馈。我会尽力帮助你解决问题。

### 新增内容

目前最大的障碍是针对各大语言在 WSL 下的适配工作。因此希望如果你在 WSL 中使用一个具体语言十分舒爽（比如 Ruby、Typescript、Golang、Rust、Scala 等等），可以在这里分享你的这门语言的开发环境配置过程。

如果你确定希望对本项目增加「具体语言相关的开发环境配置」教程，那么请按照下面的步骤进行贡献：

## 熟悉项目

由于项目是由 VuePress 构建，部署并托管在 Vercel 上的静态网页，因此希望你在对项目做任何改变前，先熟悉项目的结构和构建方式：

### 构建方式

1. 在 GitHub 上 fork 一份本项目到你自己的 GitHub 账号下
2. 将项目 `clone` 到你的本机：
   ```bash
   $ git clone https://github.com/{YOUR_USER_NAME}/dowww.git
   ```
3. 安装 `Node.js` 和其包管理 `yarn`：
   - 如果你已经开始（或很想）使用 WSL 进行开发，请直接用你所选择的 Linux 发行版的包管理安装上面所述的内容。更多内容请参考 - [Dev on Windows with WSL | Node.js](https://dowww.spencerwoo.com/3-VSCode/3-6-NodeJS.html)
   - 如果你依旧在使用 Windows 侧的开发环境，推荐使用 Windows 的「包管理」工具 - [`scoop`](https://github.com/lukesampson/scoop)：
     - 安装 `scoop`，PowerShell 中运行：
       ```powershell
       iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
       ```
     - 安装 `nvm`：
       ```powershell
       scoop install nvm
       ```
     - 安装最新稳定版本的 `Node.js`：
       ```powershell
       nvm install latest
       ```
     - 安装 `yarn`：
       ```powershell
       scoop install yarn
       ```
   - 如果你并没有在用 Windows ... 那你怎么看到这个项目了 ∑( 口 ||
4. 安装相关依赖：
   ```bash
   yarn install
   ```
5. 本地预览：
   ```bash
   yarn docs:dev
   ```

### 结构

- `/docs` 文件夹下存放文档 Markdown 文件。文件夹名、文件名等即表示相应的文档内容；
- `/docs/.vuepress` 文件夹下为 VuePress 的配置文件，请不要非必要情况下任意修改；

## 明确行文准则

> ❗ 请先明确，为了整个文档统一的格式，新增内容必须严格符合下文的行文规范。不符合的内容将会被要求修改。请谅解。

文章行文规范严格遵守 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines) 中的规范准则。

详细地：

- 空格
  - 行文时，请在中文与英文、中文与数字、英文与数字之间增加空格；
  - 一段文字中有超链接的部分，在超链接的前后使用空格；
  - 英文前后接全角标点符号或者表示单位的角标符号时，不需要加空格；
  - 对于有特殊用法的专有名词，如 WSL、Windows 10、Ubuntu 18.04 等，英文和数字之间是否空格以官方标准为准；
  - 每段文字的开头不需要空两格；
- 标点符号
  - **不要重复使用标点符号，尤其是在表达强烈情感的时候**；
  - 引号请使用直角引号「」，而不是弯引号 “”；
  - 一般情况下，一个中文句子中出现了英文部分，仍然使用中文标点，即全角符号；
  - 如果引用一段完整的英文句子，或是出现在专有名词中的标点，则不需要更改标点符号；

我本人会对新增内容进行审核，请务必遵守上面的行文准则，当然，也要保证文章内容清晰规范。

## 增加一门语言的环境配置指南

请在 `/docs/3-VSCode` 下新建一个文件，命名为 `3-*-***.md`。其中 `*` 表示第几篇文章，`***` 表示语言的名称，比如：`3-8-AmazingLanguage.md`。请在这个文件下进行文章的撰写。

撰写完成之后，请不要忘记在 `docs/.vuepress/config.js` 中的相应位置增加你撰写的文档路径，比如：

```javascript
module.exports = [
  // ……
  {
    title: 'Visual Studio Code',
    collapsable: false,
    children: [
      // ……
      '3-VSCode/3-7-DotNetCore',
      // 你应该下面添加 3-8-AmazingLanguage 的路径
      '3-VSCode/3-8-AmazingLanguage'
    ]
  }
  // ……
]
```

之后，在本地构建预览：

```bash
yarn docs:dev
```

这样就可以在本地预览你的文章了。

一般情况下，到这里就可以了，在本地写好文章之后将新增内容 push 到 GitHub 并提交 PR，我就会将你的新增内容更新至文档中。

## 其他

其他内容的增加和更改，请直接修改你想要修改的地方，我会根据更改选择是否 merge 你的内容。
