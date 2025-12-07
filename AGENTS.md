# Repository Guidelines

## 项目结构与模块划分
- 入口：`src/main.jsx` 挂载 React，`src/App.jsx` 通过注释切换展示的组件。
- 组件库：`src/components` 下分 `base-example`（基础示例）与 `BeginnersProjects`（按编号的练习项目，如 `01.Counter`、`04.Calculator`、`08.Accordions`、`09.FormValidation`），每个项目的 JSX 与局部样式文件（`index.css`/`style.css`）同目录放置。
- 其他：`index.html` 为静态壳，`vite.config.js` 管理构建，`eslint.config.js` 定义规则，构建产物输出到忽略的 `dist/`。

## 构建、测试与本地开发
- 安装依赖：`pnpm install`（已有 pnpm lock，优先使用 pnpm）。
- 热更新开发：`pnpm dev`。
- 生产构建：`pnpm build`。
- 生产预览：`pnpm preview`（本地服务已构建的 `dist`）。
- 全量 Lint：`pnpm lint`（ESLint，含 React hooks/refresh 插件）。

## 代码风格与命名约定
- 语言：JavaScript/JSX，ESM，React 19。统一 2 空格缩进，保留分号，遵循现有格式。
- 命名：组件/文件用帕斯卡命名（如 `Accordion.jsx`），已有目录命名保持原样（如 `BeginnersProjects/04.Calculator`）。样式就近放置 `index.css` 或 `style.css`。
- 规则：遵循 ESLint，避免未使用变量（允许 ALL_CAPS 常量）。优先函数式组件与 hooks，状态逻辑靠近消费方。
- 文字要求：新增代码注释、文档以及代码评审/回复信息一律使用简体中文，术语保持统一、简洁。

## 测试指引
- 目前未配置自动化测试。新增测试时可接入 Vitest + React Testing Library，文件命名 `*.test.jsx` 与组件同级（示例：`src/components/BeginnersProjects/08.Accordions/Accordion.test.jsx`）。
- 在缺少自动化的情况下，PR 请附手动验证步骤（访问路径、交互说明）。

## 提交与 PR 规范
- 提交遵循 Conventional Commits（如 `feat: ...`、`fix: ...`、`chore: ...`），可选 scope（`feat(App): ...`）。用祈使句，简短明了，可中英混合补充上下文。
- PR 需说明变更点、影响的组件/路径及验证步骤；若有关联 issue 请链接；UI 可视改动务必附截图/GIF（尤其是 `src/components/BeginnersProjects` 下的组件）。
