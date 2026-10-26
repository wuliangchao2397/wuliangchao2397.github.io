# WLC 个人空间

原生 HTML、CSS、JavaScript 构建的作品集与工具导航，无需安装依赖。作品是明确标注的占位内容；工具为可替换的示例收藏。

## 本地查看

在此目录执行 `python3 -m http.server 4173 --directory public`，访问 http://localhost:4173 。

## GitHub 自动部署

1. 新建公开仓库，建议命名 `wuliangchao2397.github.io`，默认分支为 `main`。
2. 把本目录内容放到新仓库根目录，包括 `.github/workflows/deploy.yml` 和 `public/`。
3. 仓库 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。
4. 推送 main 分支，或在 Actions 中手动运行 Deploy personal site。
5. 等待 workflow 成功后，从 Pages 设置或部署记录打开真实上线地址。

上述仓库名对应的预期网址为 https://wuliangchao2397.github.io/ ，并不表示目前已经上线。其他仓库名也支持，所有站内资源采用相对路径。

## 修改内容

- `public/index.html`：个人简介、作品占位、页脚。
- `public/app.js`：工具名称、分类、描述和链接。
- `public/style.css`：颜色和响应式布局。

自动部署配置参考：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

旧仓库删除尚未执行，建议新站上线后再处理。
