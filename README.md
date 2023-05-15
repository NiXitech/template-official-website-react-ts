# template-official-website-vite-ts

官网项目模板

<br />

## 目录说明

```
├── public 资源目录
├── script 脚本
├── src
│   ├── assets 参与打包的资源目录
│   ├── components 通用组件
│   │   ├── mobile H5通用组件
│   │   └── pc PC通用组件
│   ├── config 配置相关
│   │   └── routes.tsx 路由配置
│   ├── constants 常量
│   ├── contexts 上下文
│   ├── enums TS枚举
│   ├── hooks hooks相关
│   ├── i18 国际化相关
│   ├── interfaces api相关TS接口
│   ├── pages
│   │   ├── mobile H5页面
│   │   └── pc PC页面
│   ├── services api集中管理
│   ├── utils 工具

```

<br />

## 适配说明

`注意：H5 和 PC 相关文件必须按规范存放，否则不能自动适配`

1. `H5` 采用 `rem` 适配，以 `375px` 为基准
2. `PC` 默认采用 `vw` 适配，以 `1920px` 为基准（如果对屏幕要求较高使用 `media` 查询，尺寸参考 `App.less`）

<br />

## vscode 插件

需要安装 `ESLint` 和 `Prettier - Code formatter` 插件

<br />

## 安装

```
pnpm install
```

## 运行

```
pnpm dev
```

## 构建

```
pnpm build
```
