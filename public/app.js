// 示例导航：替换或新增条目即可维护工具箱。
const tools = [
  { name: 'GitHub', category: '开发', description: '代码托管与项目协作', url: 'https://github.com/', icon: 'G', color: '#eeeeeb', ink: '#24292f' },
  { name: 'MDN', category: '开发', description: 'Web 开发文档', url: 'https://developer.mozilla.org/zh-CN/', icon: 'M', color: '#e9edf8', ink: '#3758ee' },
  { name: 'Can I use', category: '开发', description: '浏览器兼容性参考', url: 'https://caniuse.com/', icon: '?', color: '#eee8df', ink: '#836345' },
  { name: 'Figma', category: '设计', description: '界面设计与原型', url: 'https://www.figma.com/', icon: 'F', color: '#f0e5ed', ink: '#a85d8b' },
  { name: 'Excalidraw', category: '设计', description: '手绘风格的在线白板', url: 'https://excalidraw.com/', icon: '✎', color: '#ece8f8', ink: '#7961b6' },
  { name: 'Notion', category: '效率', description: '笔记与知识整理', url: 'https://www.notion.so/', icon: 'N', color: '#edeee8', ink: '#34382e' },
];
let category = '全部';
const search = document.querySelector('#search');
const grid = document.querySelector('#tool-grid');
function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const matches = tools.filter(tool => (category === '全部' || tool.category === category) && `${tool.name} ${tool.description} ${tool.category}`.toLocaleLowerCase().includes(query));
  grid.replaceChildren(...matches.map(tool => {
    const link = document.createElement('a');
    link.className = 'tool'; link.href = tool.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${tool.name}：${tool.description}（新窗口打开）`);
    const icon = document.createElement('span'); icon.className = 'tool-icon'; icon.textContent = tool.icon; icon.style.setProperty('--tile', tool.color); icon.style.setProperty('--symbol', tool.ink); icon.setAttribute('aria-hidden', 'true');
    const text = document.createElement('div'); const title = document.createElement('h3'); title.textContent = tool.name; const description = document.createElement('p'); description.textContent = tool.description; text.append(title, description);
    const arrow = document.createElement('span'); arrow.className = 'tool-arrow'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true');
    link.append(icon, text, arrow); return link;
  }));
  document.querySelector('#empty').hidden = matches.length > 0;
  document.querySelector('#result-count').textContent = `${matches.length} 个工具 · 示例收藏`;
}
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.category;
  document.querySelectorAll('[data-category]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  render();
}));
search.addEventListener('input', render);
document.querySelector('#year').textContent = new Date().getFullYear();
render();
