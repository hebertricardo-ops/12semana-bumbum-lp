import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({viewport:{width:390,height:1000},deviceScaleFactor:2,isMobile:true,hasTouch:true});
await p.goto('http://localhost:3000/',{waitUntil:'networkidle'});
await p.locator('#preco').scrollIntoViewIfNeeded();
await p.waitForTimeout(600);
await p.screenshot({path:'.impeccable/review/m-preco-final.png'});
await p.close();

const d = await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
await d.goto('http://localhost:3000/',{waitUntil:'networkidle'});
await d.locator('#preco').scrollIntoViewIfNeeded();
await d.waitForTimeout(600);
await d.screenshot({path:'.impeccable/review/d-preco-final.png'});
await d.close();

const f = await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});
await f.goto('http://localhost:3000/',{waitUntil:'networkidle'});
await f.locator('footer').scrollIntoViewIfNeeded();
await f.waitForTimeout(400);
await f.screenshot({path:'.impeccable/review/m-footer-final.png'});
await f.close();

const fd = await b.newPage({viewport:{width:1440,height:600},deviceScaleFactor:1});
await fd.goto('http://localhost:3000/',{waitUntil:'networkidle'});
await fd.locator('footer').scrollIntoViewIfNeeded();
await fd.waitForTimeout(400);
await fd.screenshot({path:'.impeccable/review/d-footer-final.png'});
await fd.close();

await b.close();
