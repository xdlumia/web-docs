###
 # @Author: web.王晓冬
 # @Date: 2020-04-16 15:56:25
 # @LastEditors: web.王晓冬
 # @LastEditTime: 2020-04-29 16:57:51
 # @Description: file content
 ###
#!/usr/bin/env sh

# abort on errors
set -e

# build
echo '开始构建'
echo $1
#获取当前分支名
curr_branch=`git symbolic-ref --short -q HEAD`
echo '当前工作分支 => '${curr_branch}'\n'

git add -A
git commit -m $1
git push

npm run build
# navigate into the build output directory

# cd dist
# echo '开始上传'
# git init 
# git add -A
# git commit -m $1
# # git remote add origin https://github.com/xdlumia/xdlumia.github.io.git
# # git push -f https://github.com/xdlumia/xdlumia.github.io.git master

# git remote add origin https://gitee.com/xdlumia/docs.git
# # git push -f git@github.com:xdlumia/xdlumia.github.io.git master
# git push -f https://gitee.com/xdlumia/docs.git master
cd -
