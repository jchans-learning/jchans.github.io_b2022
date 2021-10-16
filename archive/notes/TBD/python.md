# Python 的一些筆記

## 建立環境

### 用 Python3 建立虛擬環境

例如，我現在想建立一個名為「 tutorial-env 」的環境：

```
$ python3 -m venv tutorial-env
```

參考：https://docs.python.org/zh-tw/3/tutorial/venv.html

### 在 PowerShell 下操作 Git

```
import os

os.system('git status')
os.system('git add .')
commitMessage = input('commit message> ')
commitCommand = 'git commit -m ' + '"' + commitMessage + '"'
os.system(commitCommand)
os.system('git push')
```

### 在 PowerShell 下備份檔案，以 _vimrc 為例

用這個作法可能可以很方便地備份一些常用的檔案

```
import os

os.system('copy "C:\Program Files (x86)\Vim\_vimrc" "C:\dev\_vimrc"')
```