# 说明

## 首要说明
本项目采用 **yarn** 管理依赖
yarn 安装指南: https://yarnpkg.com/getting-started/install

## 介绍
本项目nuxt3-qingxun-wwcz是字节跳动青训营-未完成组（这个“未完成组”是组名）的项目，选题为掘金页面

## 一些开发规范
1. 暂不强制使用ts开发，不熟悉ts的同学用js开发即可
2. 变量名命名规范: 组件大驼峰, 变量名小驼峰
3. 每次提交的代码不宜过多(上限100行左右)， 及时提交pr以及找人review

## 启动
```bash
# 装依赖
yarn install

# 启动调试
yarn run dev
或
yarn dev -o
```

## git 规范
### 拉取仓库
```bash
git clone git@github.com:qingxunDaydayup/nuxt3-qingxun-wwcz.git
```
### 新建自己的分支
```bash
git checkout -b 自己的分支名
```
### 提交规范
```bash
# 提交前确保代码书写规范
git add .
git commit -m "[种类] 代码描述"
```
commit 种类:
- docs 修改文档
- feat 新增功能
- fix  修复bug
- refactor 重构
- style 修改样式
- test 增加测试样例
- spell 拼写错误/改进
### 推送
```bash
# 推送前先更新主分支
git checkout main
git pull origin main

# 在自己的分支下将main分支合并
git checkout 自己的分支
git merge main

# 若有冲突，修改代码后重新提交一次

# 推送
git push origin 自己的分支

# 到github上提交pr
```

## 教程参考
1. nuxt3官方文档: https://nuxt.com/docs
2. CSDN教程-Nuxt3中文开发教程: https://blog.csdn.net/dvtop/category_12111537.html
3. vue3官网: https://cn.vuejs.org/
4. nuxt3快速入门视频: https://www.bilibili.com/video/BV1nG4y1u7EU


## 构建记录

```bash
D:\qingxun>npx nuxi init nuxt3-qingxun-wwcz
Nuxi 3.1.2                                                                 21:28:10
✨ Nuxt project is created with v3 template. Next steps:                   21:28:13
 › cd nuxt3-qingxun-wwcz                                                   21:28:13
 › Install dependencies with npm install or yarn install or pnpm install   21:28:13
 › Start development server with npm run dev or yarn dev or pnpm run dev   21:28:13

D:\qingxun>cd nuxt3-qingxun-wwcz

D:\qingxun\nuxt3-qingxun-wwcz>yarn install
yarn install v1.22.19
info No lockfile found.
[1/4] Resolving packages...
warning nuxt > vue > @vue/compiler-sfc > magic-string > sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
warning nuxt > @nuxt/vite-builder > cssnano > cssnano-preset-default > postcss-svgo > svgo > stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
[2/4] Fetching packages...
warning vscode-languageclient@7.0.0: The engine "vscode" appears to be invalid.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
$ nuxt prepare
Nuxi 3.2.0                                                                 21:29:48
√ Types generated in .nuxt                                                 21:29:51
Done in 34.30s.
```



# -- 下方为原始 Readme 内容 --
# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
