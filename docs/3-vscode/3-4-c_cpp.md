# C/C++ <a href="https://github.com/spencerwooo"><Badge text="@SpencerWoo"/></a>

::: callout 🥐 本文内容
本文我们会对利用 VS Code 在 WSL 环境中编写 C、C++ 程序的方法进行介绍。本文主要面向学习 C、C++ 语言的同学，包括使用 C、C++ 实现各项算法的 ACM 竞赛同学，以及学习数据结构等知识的同学。值得注意的是，本文的配置项目可能仅仅适合单个 C、C++ 代码文件的编译运行，涉及到大型 C、C++ 项目我更加推荐使用专业 IDE（比如 Visual Studio）进行开发工作。
:::

在开始之前，我们先对编译运行 C、C++ 文件的基础知识进行简单的介绍。我们可以：

- 使用 `gcc` 工具来编译运行 C 语言编写的代码文件
- 使用 `g++` 工具来编译运行 C++ 语言编写的代码文件
- 使用 `gdb` 工具来调试 C 或 C++ 语言编写的代码文件

在命令行环境中，基本的编译运行命令大致如下：

```bash
# 使用 gcc 编译一个名叫 hello.c 的 C 文件，生成名为 hello 的可执行文件，或……
gcc hello.c -o hello
# 使用 g++ 编译一个名叫 hello.cpp 的 C++ 文件，生成名为 hello 的可执行文件
g++ hello.cpp -o hello

# 执行可执行文件 hello
./hello
```

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006.png)

接下来，我们来看如何利用 VS Code 编译、调试 C/C++ 项目

## 安装 C/C++ 插件

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-1.png)

下载安装 VS Code 官方 C/C++ 插件：[C/C++ for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools).

## 安装 C/C++ 编译调试工具

- 下载安装包含大部分开发所需组件的 `build-essential` 组件包：

  ```bash
  sudo apt install build-essential
  ```

- 为了确保安装了编译 C/C++ 的组件，我们尝试安装编译工具 `gcc`、`g++` 和调试工具 `gdb`：

  ```bash
  sudo apt install gcc g++ gdb
  ```

- 再次确认安装状态：

  - 运行：`gcc --version` 与 `g++ --version`，如果有类似下面的输出，说明我们的 C/C++ 编译环境就安装成功了：

    ![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-2.png)

  - 运行：`gdb --version`，如果有类似下面的输出，说明我们调试 C/C++ 程序的环境就安装成功了：

    ![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-3.png)

## VS Code 智能代码提示

默认情况下，VS Code 会根据你当前所在的环境自动为你生成代码智能提示（也就是 Intellisense）的配置文件，这个文件往往叫做 `c_cpp_properties.json`，位于当前项目的 `.vscode` 文件夹下。在打开 C、C++ 文件的情况下，VS Code 右下角会出现当前使用的配置文件，比如这里就是 Linux，表示我们在 Linux 环境下，使用默认的 Linux 配置文件。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-4.png)

点击 VS Code 右下角配置文件的按钮，我们可以打开配置文件进行修改。VS Code 提供了直接修改 JSON 文件以及通过 UI 的方法修改配置的两种手段，UI 的方法有更多的说明事项，大家可以按照自己的实际情况进行配置。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-5.png)

事实上，这里需要配置的项目并不多，如果你没有涉及到一些专有的编译选项的话，这里直接使用默认配置即可。

## 文件结构

一个我个人比较推荐的 C/C++ 的文件结构是这样的：

::: tree
.
├── `.vscode`
│ ├── c_cpp_properties.json
│ ├── launch.json
│ └── tasks.json
├── hello.cpp <span class="token comment">(or hello.c)</span>
├── in.txt
└── out.txt
:::

其中：

> 🔴 必要、🔵 可选、🔷 自动生成。

| 属性 | 文件用途                                                                                                                                                                                                   |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔴    | `hello.cpp` 是主 C++ 文件（相应的，`hello.c` 是主 C 文件）                                                                                                                                                 |
| 🔷    | `.vscode/` 文件夹下面安置 VS Code 编译调试所需的配置文件                                                                                                                                                   |
| 🔵    | `in.txt` 和 `out.txt` 是 C/C++ 程序的输入输出文件，我相信经历过 ACM 培训的同学会理解为什么要单独配置这两个文件，主要原因在于有时候输入内容太庞大复制粘贴有时候会出现格式问题，配置输入输出文件更加有利开发 |
| 🔷    | `a.out` 是编译之后 C/C++ 程序的可执行文件，由编译器自动生成                                                                                                                                                |

当然一个文件夹下可以放置多个 C/C++ 文件，不会影响正常调试与开发。

## 一键编译运行

::: callout 🍔 注意
C/C++ 文件的一键编译运行依赖于 Code Runner 插件，基础配置详见：[Dev on Windows with WSL - Code Runner](/dev/3-VSCode/3-2-Code-Runner.md)
:::

大多数情况下我们可以直接利用之前安装的 Code Runner 插件进行编译运行 C/C++ 程序。默认情况下 Code Runner 编译 C、C++ 文件的配置如下：

```json
"code-runner.executorMap": {
  "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
  "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
}
```

可以看到：

- 具体编译的部分命令是 `gcc $fileName -o $fileNameWithoutExt`
- 编译出来的可执行文件为 `$dir$fileNameWithoutExt`
- 运行可执行文件的命令为 `./$dir$fileNameWithoutExt`

通过 Code Runner 插件我们实际上就是自动化了这一过程，一键编译。经过这样的配置，在代码工作区右键选择 `Run Code`、在 Command Palette (`Ctrl + Shift + P`) 输入 Run Code、或者直接快捷键 `Ctrl + Alt + N`，就可以编译执行代码了。**输入等其他与程序进行交互的部分位于终端区域。**

大部分情况下，这里都不需要更改，不过如果你希望自定义编译参数，可以在 Code Runner 的配置项目 `code-runner.executorMap` 中进行相应的增减。

## 调试 C++ 项目

::: callout 🧇 注意
接下来我以 C++ 的调试为例子进行介绍，C 语言程序的调试几乎一致，大家请举一反三。
:::

VS Code 有着其他编辑器无法比拟的调试功能。强大到令人发指。默认情况下，我们在已经打开一个 C++ 文件的情况下，点击 VS Code 菜单栏的 Debug > Start debugging，或者快捷键 `F5`，即可唤起 VS Code 的调试功能。在没有任何配置的情况下，首先 VS Code 会提示我们选择编译器，这里我们选择 `C++ (GDB/LLDB)` 的环境：

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-6.png)

之后，选择一个已经配置好的配置，这里我们选择 `g++ build and debug active file`，也就是利用 `g++` 工具编译当前文件并对其进行调试：

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-7.png)

如果一切顺利，那么我们应该直接进入调试界面。可以看到，上面的选项条就是单步执行、跳至下一部分等调试命令。在代码左侧行号旁边，我们可以为程序添加断点等等。侧边栏上面会实时显示程序中涉及到的某个变量的值，比如这里我的 `input` 变量在接收到输入之后就变成了我刚刚输入的 `Hello!`。

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-8.png)

与此同时，我们可以发现，在当前项目的 `.vscode` 文件夹下出现了两个文件，它们分别是 `tasks.json` 和 `launch.json`：

- `tasks.json`：是编译当前文件的指令
- `launch.json`：是执行当前文件并让 `gdb` 调试工具连接到可执行文件的指令

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-9.png)

大多数情况下，我们直接用上面的步骤即可对一个 C++ 代码项目进行调试。

## ACM 比赛的建议

为了更方便的处理庞大的格式化输入，在 C/C++ 中我们可以通过这样的代码片段来读取输入 `in.txt` 并将程序输出、程序运行时间写入文件 `out.txt`。这段代码是这样的：

```c
#ifdef SUBMIT
freopen("in.txt", "r", stdin);
freopen("out.txt", "w", stdout);
long _begin_time = clock();
#endif

/* your code here */

#ifdef SUBMIT
long _end_time = clock();
printf("time = %ld ms", _end_time - _begin_time);
#endif
```

同时要修改 `tasks.json` 中 `args` 字段，增加参数 `-DSUBMIT` 让编译器定义 `SUBMIT` 宏，未定义该宏的环境中上面的代码段则不会被编译：

```json
"args": [
  "-DSUBMIT",
  "-g",
  "${file}",
  "-o",
  "${fileDirname}/${fileBasenameNoExtension}"
],
```

VS Code 支持用户自定义代码片段，访问这里直接获取为 VS Code 生成的代码片段设置 > [Snippet Generator](https://url.cn/5wqOpNm)：

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_222006-10.png)

然后在左下角设置 > User Snippets 中添加这个代码片段，之后只需输入 `inputoutput` 就可以自动补全了。

更多有关利用 VS Code 撰写、编译、调试 C/C++ 代码项目的方法，请参考：[C/C++ for Visual Studio Code (Preview) - Visual Studio Code Docs](https://code.visualstudio.com/docs/languages/cpp)
