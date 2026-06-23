const js = await (await fetch("https://demo.asapol.org/assets/index-BHNzmULL.js")).text();

const idx = js.indexOf('bg-gradient-to-br from-brand via-brand to-brand-dark');
console.log(js.slice(idx, idx + 3500));
