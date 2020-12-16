# Python 的一些筆記



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