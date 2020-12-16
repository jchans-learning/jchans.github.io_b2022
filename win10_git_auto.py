import os

os.system('git status')
os.system('git add .')
commitMessage = input('commit message> ')
commitCommand = 'git commit -m ' + '"' + commitMessage + '"'
os.system(commitCommand)
os.system('git push')

# test mac python2 compatibility
