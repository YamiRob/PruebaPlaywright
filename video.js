const { chromium } = require('playwright');

(async() => { //anonymous arrow function
    //function code

    //launching browser
    const browser = await chromium.launch({headless:false, slowMo:25});
    
    //creating a page inside browser
    const context = await browser.newContext({ 
        
        recordVideo: { dir: './videos' }
    
    });

    const page = await context.newPage();
    
    //navigating to site
    await page.goto('http://the-internet.herokuapp.com/dynamic_loading/1');

    //click on button
    await page.click('Button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading', { state: 'hidden'});

    //closing browser
    await browser.close();

})();