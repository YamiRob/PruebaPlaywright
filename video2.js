const { chromium } = require('playwright');

(async() => {

  const browser = await chromium.launch({headless:false, slowMo:25});
    
    //creating a page inside browser
    const context = await browser.newContext({});

    const page = await context.newPage();

  // Go to https://demo.clixiesite.com/brophy/
  await page.goto('https://demo.clixiesite.com/brophy/');

  // Click text=Financing Technology Commercialization: A Venture Capital Practicum Watch video >> img
  await page.locator('text=play');
  await locator.click();

  // Click #video-1662749522663 header button
  await page.frameLocator('iframe').locator('#video-1662749522663 header button').click('button');

  // Click .cx-big-play
  await page.frameLocator('iframe').locator('.cx-big-play').click();

  // Click text=×
  await page.locator('text=×').click();

  await browser.close();

})();