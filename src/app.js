document.addEventListener('DOMContentLoaded', async () => {
  const platform = await window.minimaxAPI.getPlatform();
  const theme = await window.minimaxAPI.getTheme();
  
  document.body.classList.add(platform === 'win32' ? 'windows' : 'mac');
  document.body.classList.add(theme);
  
  initApp(platform);
});

function initApp(platform) {
  console.log(`Running on ${platform}`);
  const container = document.querySelector('.app-container');
  const platformName = platform === 'win32' ? 'Windows' : 'macOS';
  
  container.innerHTML += `
    &lt;h1&gt;🎉 跨平台版本已加载！&lt;/h1&gt;
    &lt;p&gt;当前平台: &lt;strong&gt;${platformName}&lt;/strong&gt;&lt;/p&gt;
    &lt;p&gt;主题: &lt;strong&gt;${document.body.classList.contains('dark') ? '深色' : '浅色'}&lt;/strong&gt;&lt;/p&gt;
    &lt;p style="margin-top: 20px; color: #666;"&gt;请在这里集成您的MiniMax用量监控功能&lt;/p&gt;
  `;
}