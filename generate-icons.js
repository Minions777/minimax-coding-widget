const fs = require('fs');
const path = require('path');

console.log('🎨 图标生成器启动...');

const svgContent = `
&lt;svg width="512" height="512" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;defs&gt;
    &lt;linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"&gt;
      &lt;stop offset="0%" style="stop-color:#0078d4;stop-opacity:1" /&gt;
      &lt;stop offset="100%" style="stop-color:#00bcf2;stop-opacity:1" /&gt;
    &lt;/linearGradient&gt;
  &lt;/defs&gt;
  &lt;rect width="512" height="512" rx="64" fill="url(#gradient)"/&gt;
  &lt;text x="256" y="320" font-family="Arial, sans-serif" font-size="220" font-weight="bold" fill="white" text-anchor="middle"&gt;MM&lt;/text&gt;
&lt;/svg&gt;`;

fs.writeFileSync(path.join(__dirname, 'assets', 'icons', 'png', 'icon.svg'), svgContent);
console.log('✅ SVG图标已创建');