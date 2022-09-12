const playwright = require ('playwright');

(async () => {

    //Code execution happens within here
    const browser = await playwright["chromium"].launch({
        headless: false
    })
    
    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

    //navigate to the 
    await page.goto("https://www.youtube.com/");
    await page.screenshot({path: `ea- ${Date.now}.png`});
    await browser.close();

})();