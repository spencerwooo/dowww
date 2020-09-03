# .Net Core <a href="https://github.com/dhssingle"><Badge text="@dhssingle"/></a>

:::callout 🥦 前导知识
[.NET Core](https://docs.microsoft.com/zh-cn/dotnet/core/about) 是开放源代码通用开发平台，由 Microsoft 和 .NET 社区在 [GitHub](https://github.com/dotnet/core) 上共同维护。它跨平台（支持 Windows、macOS 和 Linux），并且可用于生成设备、云和 IoT 应用程序。
:::

## 安装插件

下载 Visual Studio Code 官方 C# 插件：[C# for Visual Studio Code (powered by OmniSharp).](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp).

## 在 WSL 侧安装 .Net Core

以下内容以 Ubuntu 18.04 为例，其他发行版请参考：[官方文档](https://dotnet.microsoft.com/download/linux-package-manager/rhel/sdk-current)。

```bash
$ wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb
$ sudo dpkg -i packages-microsoft-prod.deb
$ sudo add-apt-repository universe
$ sudo apt install apt-transport-https
$ sudo apt update
$ sudo apt install dotnet-sdk-2.2
```

## 在 WSL 侧安装 Debugger

```bash
$ sudo apt install unzip
$ curl -sSL https://aka.ms/getvsdbgsh | bash /dev/stdin -v latest -l ~/vsdbg
```

## 调试 .Net Core 程序

- 配置 `.vscode/launch.json`：

  ```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": ".NET Core Launch (console)",
        "type": "coreclr",
        "request": "launch",
        "preLaunchTask": "build",
        "program": "/mnt/c/your-project-path/<insert-project-name-here>.dll",
        "cwd": "/mnt/c/your-project-path",
        "console": "internalConsole",
        "pipeTransport": {
          "pipeCwd": "${workspaceRoot}",
          "pipeProgram": "bash.exe",
          "pipeArgs": ["-c"],
          "debuggerPath": "~/vsdbg/vsdbg"
        },
        "sourceFileMap": {
          "/mnt/c/your-project-path": "C:\\your-project-path"
        }
      }
    ]
  }
  ```

- 配置 `.vscode/task.json`：

  ```json
  {
    "version": "2.0.0",
    "tasks": [
      {
        "label": "build",
        "command": "dotnet",
        "type": "shell",
        "args": ["build", "/mnt/c/your-project-path/projectname.csproj"],
        "options": {
          "shell": {
            "executable": "bash.exe",
            "args": ["-c"]
          }
        }
      }
    ]
  }
  ```

按 <kbd>F5</kbd> 进入调试：

![](https://cdn.spencer.felinae98.cn/github/2020/09/200902_221819.png)

更多配置信息请阅读：[Configuring debugging](https://github.com/OmniSharp/omnisharp-vscode/wiki/Windows-Subsystem-for-Linux#configuring-debugging)
