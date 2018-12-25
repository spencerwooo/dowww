# C/C++

::: tip
目前来看利用 WSL 中的 `gcc/g++/gdb` 来调试我们的 C/C++ 的**单个程序**应该是比较完善的了。详细的由微软 Visual Studio Code 团队与官方 CppTools 插件团队维护的文档位于这里 > [vscode-cpptools | `gdb` on Windows Subsystem for Linux.md
](https://github.com/Microsoft/vscode-cpptools/blob/master/Documentation/Debugger/gdb/Windows%20Subsystem%20for%20Linux.md)。

如果涉及到巨大的 C/C++ 项目，我更加推荐利用 Visual Studio 直接项目开发，或通过 SSH 链接到 WSL 系统进行编译调试，感谢即刻的同学给我提供的思路。
:::

## 前言

经过本章的配置，你的开发工程流应该是这样的：

![](https://i.loli.net/2018/12/15/5c14b8864db56.png)

- 在代码工作区编写代码
- 在输入、输出框区域配置输入与输出
- 在集成终端中编译代码

除了介绍如何将 Visual Studio Code 与 WSL 中的 C/C++ 组件更紧密结合，我还将介绍如何更高效的编写调试 C/C++ 代码，力求让刚接触 C/C++ 语言的同学更有头绪。具体的配色与图标方案，在这里我安置了一些参考 > [VSCode 参考配置](/3-VSCode/#参考配置)。

## 在 Visual Studio Code 中安装 C/C++ 插件

下载安装 Visual Studio Code 官方 C/C++ 插件：[VSCode CppTools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools).

## 在 WSL 侧安装 C/C++ 编译调试所需组件

1. 下载安装包含大部分开发所需组件的 build-essential：`sudo apt install build-essential`
2. 为了确保安装了编译 C/C++ 的组件，运行：`sudo apt install gcc g++ gdb`
3. 再次确认安装状态：
    - 运行：`gcc --version` 与 `g++ --version`：

    ![](https://i.loli.net/2018/12/25/5c21c2c0baef6.png)
    
    这样我们的 C/C++ 编译环境就安装成功了。

    - 运行：`gdb --version`：

    ![](https://i.loli.net/2018/12/25/5c21c359b9256.png)

    这样我们的 C/C++ 调试环境就安装成功了。

## 文件结构

一个我个人比较推荐的 C/C++ 的文件结构是这样的：

```bash
.
├── .vscode
│   ├── launch.json
│   ├── settings.json
│   └── tasks.json
├── Hello.cpp (or Hello.c)
├── a.out
├── in.txt
└── out.txt
```

其中：

> 🔴 必要、🔵 可选、🔷 自动生成。

| 属性 | 文件用途                                                                                                                                                                                                   |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔴   | `.vscode/` 文件夹下面安置 VSCode 调试所需的配置文件                                                                                                                                                        |
| 🔴   | `Hello.cpp` 是主 C++ 文件（相应的，`Hello.c` 是主 C 文件）                                                                                                                                                 |
| 🔵   | `in.txt` 和 `out.txt` 是 C/C++ 程序的输入输出文件，我相信经历过 ACM 培训的同学会理解为什么要单独配置这两个文件，主要原因在于有时候输入内容太庞大复制粘贴有时候会出现格式问题，配置输入输出文件更加有利开发 |
| 🔷   | `a.out` 是编译之后 C/C++ 程序的可执行文件，由编译器自动生成                                                                                                                                                |

当然一个文件夹下可以放置多个 C/C++ 文件，不会影响正常调试与开发。

## 一键编译运行

> 基础配置详见 > [Code Runner](/3-VSCode/3-2-Code-Runner.html)

大多数情况下我们可以直接利用之前安装的 Code Runner 插件进行编译运行 C/C++ 程序。

首先配置一下 Code Runner 插件，在用户设置中添加如下内容：

```json
"code-runner.executorMap": {
    "c": "cd $dir && gcc $fileNameWithoutExt.c && ./a.out",
    "cpp": "cd $dir && g++ $fileNameWithoutExt.cpp && ./a.out"
}
```

可以看到，具体编译的部分命令是 `gcc $文件名.c`，编译出来的可执行文件为 `a.out`，运行可执行文件的命令为 `./a.out`，通过 Code Runner 插件我们实际上就是自动化了这一过程，一键编译。经过这样的配置，在代码工作区右键选择 `Run Code`、在 Command Palette (`Ctrl + Shift + P`) 输入 Run Code、或者直接快捷键 `Ctrl + Alt + N`，就可以编译执行代码了。**输入等其他与程序进行交互的部分位于终端区域。**

当然，如果你希望自定义可执行文件的名字，也可以将编译部分的命令更改为 `gcc -o $fileNameWithoutExt $fileNameWithoutExt.c`（以 C 语言程序为例），这样编译出来的可执行文件名称就是 `$fileNameWithoutExt`。（其中 `$fileNameWithoutExt` 是一个宏，代指 C/C++ 程序文件名。）

## 调试

Visual Studio Code 有着其他编辑器无法比拟的调试功能。强大到令人发指。

::: warning 注意
本部分默认你已经按照上面文件系统创建了 `.vscode` 文件夹和 `xxx.c` or `xxx.cpp` 程序。
:::

首先在 `.vscode` 文件夹下创建 `launch.json` 和 `task.json`，分别加入如下内容：

### `launch.json`

```json
{
    // launch.json
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "(gdb) Launch",
            "type": "cppdbg",
            "request": "launch",
            "program": "$工作区文件夹路径/a.out",
            "args": ["-fThreading"],
            "stopAtEntry": true,
            "cwd": "$工作区文件夹路径",
            "environment": [],
            "externalConsole": true,
            "MIMode": "gdb",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": false
                }
            ],
            "pipeTransport": {
                "pipeCwd": "",
                "pipeProgram": "c:\\windows\\sysnative\\bash.exe",
                "pipeArgs": ["-c"],
                "debuggerPath": "/usr/bin/gdb"
            },
            "sourceFileMap": {
                "/mnt/c": "c:\\"
            },
            "preLaunchTask": "Compile"
        }
    ]
}
```

### `tasks.json`

```json
{
    // tasks.json
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [{
        "label": "Compile",
        "command": "g++",
        "args": [
            "-g",
            "-Wall",
            "-std=c++17",
            "$工作区文件夹路径/${fileBasename}"
        ],
        "problemMatcher": {
            "owner": "cpp",
            "fileLocation": ["relative", "${workspaceRoot}"],
            "pattern": {
                "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
                "file": 1,
                "line": 2,
                "column": 3,
                "severity": 4,
                "message": 5
            }
        },
        "type": "shell",
        "group": {
            "kind": "build",
            "isDefault": true
        },
        "presentation": {
            "echo": true,
            "reveal": "always",
            "focus": true,
            "panel": "shared"
        }
    }]
}
```

### 配置上述两个文件

1. 修改两个文件中的 `$工作区文件夹路径` 为你自己的具体文件路径，路径可以通过在终端执行 `pwd` 获取：

![](https://i.loli.net/2018/12/25/5c21c3883880f.png)

2. 可以看到，在 `launch.json` 中的 `pipeTransport` 属性就是 C/C++ 插件对 WSL 进行的适配，通过一个 wslBridge 来让 Windows 端调试能够链接到 WSL 中的可执行文件。
   
调试通过快捷键 `F5` 执行，经过如上配置，进入调试的界面应该如下：

![](https://i.loli.net/2018/10/18/5bc876d88afe4.png)

## Tip：更好更方便的输入输出方式

为了更方便的处理庞大的格式化输入，在 C/C++ 中我们可以通过这样的代码片段来读取输入：`in.txt` 并将程序输出、程序运行时间写入文件：`out.txt`。这段代码是这样的：

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

同时要在头文件定义时加入：

```c
#define SUBMIT //本地运行这行留下，提交代码直接注释掉
```

Visual Studio Code 支持用户自定义代码片段，访问这里直接获取为 VSCode 生成的代码片段设置 > [Snippet Generator](https://snippet-generator.app/?description=C%2FC%2B%2B+Input+%26+Output&tabtrigger=inputoutput&snippet=%23ifdef+SUBMIT%0Afreopen%28%22in.txt%22%2C+%22r%22%2C+stdin%29%3B%0Afreopen%28%22out.txt%22%2C+%22w%22%2C+stdout%29%3B%0Along+_begin_time+%3D+clock%28%29%3B%0A%23endif%0A%0A%24%7B1%3AYour+Code+Here.%7D%0A%0A%23ifdef+SUBMIT%0Along+_end_time+%3D+clock%28%29%3B%0Aprintf%28%22time+%3D+%25ld+ms%22%2C+_end_time+-+_begin_time%29%3B%0A%23endif&mode=vscode)，然后在左下角设置 > User Snippets 中添加这个代码片段，之后只需输入 `inputoutput` 就可以自动补全了。