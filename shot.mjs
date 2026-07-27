import { chromium } from 'playwright';
const b = await chromium.launch();
const shots = [
  ['/', 'home', 1500],
  ['/services/drywall/', 'service', 1400],
  ['/services/t-bar-calculator/', 'calculator', 1200],
  ['/basement-development-in-calgary/', 'blogpost', 1400],
  ['/contact-us/', 'contact', 1300],
  ['/projects/', 'projects', 1200],
];
for (const [path, name, h] of shots) {
  const p = await b.newPage({ viewport: { width: 1280, height: h } });
  await p.goto('http://localhost:3124' + path, { waitUntil: 'networkidle' });
  await p.waitForTimeout(400);
  await p.screenshot({ path: `/tmp/qgs_${name}.png` });
  console.log('shot', name);
  await p.close();
}
const m = await b.newPage({ viewport: { width: 390, height: 1500 }, isMobile: true });
await m.goto('http://localhost:3124/', { waitUntil: 'networkidle' });
await m.screenshot({ path: '/tmp/qgs_home_mobile.png' });
console.log('shot mobile');
await b.close();
