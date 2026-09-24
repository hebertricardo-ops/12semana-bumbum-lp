import { chromium } from 'playwright';
import sharp from 'sharp';

const b = await chromium.launch();
const p = await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});
await p.goto('http://localhost:3000/',{waitUntil:'networkidle'});
await p.getByRole('contentinfo').scrollIntoViewIfNeeded();
await p.waitForTimeout(400);
const box = await p.getByRole('contentinfo').boundingBox();
await p.screenshot({path:'.impeccable/review/_full-footer.png', fullPage:false});
await p.close();
await b.close();

const dsf = 2;
await sharp('.impeccable/review/_full-footer.png')
  .extract({ left: 0, top: Math.max(0, Math.round(box.y*dsf)-10), width: Math.round(390*dsf), height: Math.round((box.height+20)*dsf) })
  .toFile('.impeccable/review/m-footer-exact.png');
console.log('box', box);
