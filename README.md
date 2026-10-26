# WLC 个人空间

个人作品集与常用工具导航，记录创作与探索，也收集日常使用的网站入口。

**在线访问：[wuliangchao2397.github.io](https://wuliangchao2397.github.io/)**

## 网站内容

- **首页**：个人空间介绍与主要栏目入口。
- **作品集**：预留两个项目展示位置，目前均已标注为占位内容。
- **工具箱**：收录 GitHub、MDN、Can I use、Figma、Excalidraw 和 Notion 六个示例入口，支持开发、设计、效率分类及关键词搜索。
- **关于**：个人空间介绍与 GitHub 主页链接，个人经历待补充。

页面采用响应式布局，适配桌面与手机；支持键盘焦点提示与减少动画偏好。

## 技术与目录

使用原生 HTML、CSS 和 JavaScript，无框架、无构建步骤，无需安装 npm 依赖。网站由 GitHub Pages 托管，通过 GitHub Actions 自动发布。

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Pages 自动部署
├── public/
│   ├── index.html        # 页面结构、简介与作品内容
│   ├── style.css         # 样式与响应式布局
│   └── app.js            # 工具数据、分类与搜索逻辑
└── README.md
```

## 本地预览

安装 Python 3 后，在仓库根目录运行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory public
```

打开 [http://127.0.0.1:4173](http://127.0.0.1:4173)。修改文件并保存后，刷新页面即可查看结果；按 `Ctrl+C` 停止服务。

## 内容维护

### 修改个人介绍与作品

编辑 `public/index.html`：

- 首页介绍位于 `.hero` 区域。
- 作品卡片位于 `#works` 区域；有实际作品后，替换示意图、项目名称和描述，并更新占位标记。
- 关于内容位于 `#about` 区域。

### 添加或修改工具

编辑 `public/app.js` 中的 `tools` 数组。每条工具数据包含名称、分类、描述、链接、文字图标及配色，例如：

```js
{
  name: 'GitHub',
  category: '开发',
  description: '代码托管与项目协作',
  url: 'https://github.com/',
  icon: 'G',
  color: '#eeeeeb',
  ink: '#24292f'
}
```

现有分类为 `开发`、`设计`、`效率`。如需新增分类，同时在 `public/index.html` 的 `.filters` 中添加对应的 `data-category` 按钮。搜索会匹配工具名称、描述和分类，不区分英文大小写。

当前工具箱带有“示例收藏”说明；换成自己的收藏后，可同步修改 `public/index.html` 和 `public/app.js` 中的相关文案。

### 调整视觉样式

编辑 `public/style.css`。文件开头的 `:root` 定义背景、文字、强调色与分隔线颜色，其余规则控制页面布局和移动端样式。

## 自动部署

部署配置位于 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)，工作流名称为 **Deploy personal site**。

- **自动触发**：向 `main` 分支推送提交。
- **手动触发**：仓库 **Actions → Deploy personal site → Run workflow**。
- **发布目录**：`public/`，直接上传静态文件，无需构建。
- **部署环境**：`github-pages`。

修改完成后，可在仓库根目录执行：

```bash
git status
git add public/
git commit -m "更新个人网站内容"
git push origin main
```

如果还修改了 README 或工作流，提交前需另行暂存相应文件。只有提交到本地而未推送，不会更新线上网站。

推送后可在 [Actions](https://github.com/wuliangchao2397/wuliangchao2397.github.io/actions) 查看部署进度。工作流成功后，访问网站检查更新。

仓库 **Settings → Pages → Build and deployment → Source** 应设为 **GitHub Actions**。如部署失败，先查看失败步骤的日志，并检查 Pages 发布来源、Actions 权限及 `public/` 目录是否完整。

## 后续完善

- 用真实项目替换作品占位内容。
- 补充个人介绍与联系方式。
- 将示例工具替换为自己的常用收藏。
