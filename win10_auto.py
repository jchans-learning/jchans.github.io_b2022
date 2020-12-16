import os

# 用這個作法可能可以很方便地備份一些常用的檔案
# os.system('copy "C:\Program Files (x86)\Vim\_vimrc" "C:\dev\_vimrc"')

os.system('git status')
os.system('git add .')
commitMessage = input('commit message> ')
commitCommand = 'git commit -m ' + '"' + commitMessage + '"'
os.system(commitCommand)
os.system('git push')