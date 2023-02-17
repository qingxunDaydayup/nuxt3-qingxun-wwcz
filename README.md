# 说明

## 首要说明

本项目采用 **yarn** 管理依赖

yarn 安装指南: https://yarnpkg.com/getting-started/install

## 启动

```bash
# 装依赖
yarn install

# 启动调试
yarn run dev
```

## 介绍

本项目nuxt3-qingxun-wwcz是字节跳动青训营-未完成组（这个“未完成组”是组名）的项目，选题为掘金页面

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
