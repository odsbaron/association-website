# 协会官方网站

一个基于 Next.js 构建的现代化协会展示网站，用于展示协会发展历程、活动资料和成员信息。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: Markdown
- **部署**: Vercel

## 功能特性

- ✅ 响应式设计，完美支持移动端
- ✅ 博客系统（基于Markdown）
- ✅ 发展历程展示
- ✅ 成员介绍
- ✅ 资料库
- ✅ 链接导航
- ✅ SEO优化

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
association-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 全局布局
│   ├── page.tsx           # 首页
│   ├── blog/              # 博客页面
│   ├── about/             # 关于页面
│   └── globals.css        # 全局样式
├── components/            # 组件
│   ├── layout/           # 布局组件
│   ├── common/           # 通用组件
│   ├── content/          # 内容组件
│   └── features/         # 功能组件
├── content/              # Markdown内容
│   ├── posts/           # 博客文章
│   ├── timeline/        # 发展历程
│   ├── members/         # 成员信息
│   └── archives/        # 资料文档
├── lib/                 # 工具函数
│   └── posts.ts         # 文章处理
├── public/              # 静态资源
└── styles/              # 样式文件
```

## 内容管理

### 添加新文章

1. 在 `content/posts/` 目录下创建新的 `.md` 文件
2. 添加 Front Matter 元数据：

```yaml
---
title: "文章标题"
date: "2024-03-15"
author: "作者名"
category: "分类"
tags: ["标签1", "标签2"]
description: "文章简介"
published: true
---
```

3. 编写文章内容（支持Markdown语法）
4. 保存文件，网站自动更新

### Front Matter 字段说明

- `title`: 文章标题（必填）
- `date`: 发布日期，格式 YYYY-MM-DD（必填）
- `author`: 作者名（必填）
- `category`: 文章分类（必填）
- `tags`: 标签数组（必填）
- `description`: 文章简介（必填）
- `cover`: 封面图片路径（可选）
- `published`: 是否发布，默认 true（可选）

## 自定义配置

### 修改网站信息

编辑 `app/layout.tsx` 中的 metadata：

```typescript
export const metadata: Metadata = {
  title: "你的协会名称",
  description: "你的协会简介",
};
```

### 修改导航菜单

编辑 `components/layout/Header.tsx` 中的 navItems：

```typescript
const navItems = [
  { name: "首页", href: "/" },
  { name: "博客", href: "/blog" },
  // 添加更多菜单项...
];
```

### 修改配色方案

编辑 `tailwind.config.ts` 中的颜色配置：

```typescript
colors: {
  primary: {
    DEFAULT: '#2563eb',
    // 更多颜色...
  },
}
```

## 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入仓库
3. 自动部署完成

### 其他平台

本项目支持部署到任何支持 Next.js 的平台：

- Netlify
- Railway
- AWS Amplify
- 自托管服务器

## 开发计划

- [ ] 添加搜索功能
- [ ] 集成评论系统
- [ ] 添加深色模式
- [ ] 优化性能
- [ ] 添加更多页面

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可

MIT License

---

**文档**: 详见 `PROJECT_PLAN.md` 查看完整项目规划
