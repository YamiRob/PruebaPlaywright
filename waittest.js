const playwright = require ('playwright');

(async () => {

    //Code execution happens within here
    const browser = await playwright["webkit"].launch({
        headless: false
    })
          
    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

    //navigate to the 
    await page.goto("https://www.netflix.com/mx/");
     
    await page.waitForResponse(response => {
        return response.request().resourceType() === "xhr"
    })
        
    await page.screenshot({path: `netflix- ${Date.now}.png`});
    //await browser.close();

})();