import { chromium } from "playwright";
describe('Launch Browser', ( ) => {

test('Rercorded script', async () => {

  await page.goto('https://letcode.in/');
  // Click text=Log in
  await page.locator('text=Log in').click();
  await expect(page).toHaveURL('https://letcode.in/signin');
  // Click text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
  await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').click();
  // Fill text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]
  await page.locator('text=EmailPasswordLOGIN >> [placeholder="Enter registered email"]').fill('aloyami13@gmail.com');
  // Click [placeholder="Enter password"]
  await page.locator('[placeholder="Enter password"]').click();
  // Fill [placeholder="Enter password"]
  await page.locator('[placeholder="Enter password"]').fill('kimyami13');
  // Click text=LOGIN
  await page.locator('text=LOGIN').click();
  await expect(page).toHaveURL('https://letcode.in/');
  // Click text=Explore Workspace
  await page.locator('text=Explore Workspace').click();
  await expect(page).toHaveURL('https://letcode.in/test');
  // Click text=All in One
  await page.locator('text=All in One').click();
  await expect(page).toHaveURL('https://letcode.in/forms');
  // Click #firstname
  await page.locator('#firstname').click();
  // Fill #firstname
  await page.locator('#firstname').fill('yami');
  // Click #lasttname
  await page.locator('#lasttname').click();
  // Fill #lasttname
  await page.locator('#lasttname').fill('rob');
  // Click [placeholder="Email input"]
  await page.locator('[placeholder="Email input"]').click();
  // Fill [placeholder="Email input"]
  await page.locator('[placeholder="Email input"]').fill('aloyami13@gmail.com');
  // Select 52
  await page.locator('text=Country codeUSA (+1)UK (+44)Other CountriesAlgeria (+213)Andorra (+376)Angola (+ >> select').selectOption('52');
  // Click [placeholder="Phone Number"]
  await page.locator('[placeholder="Phone Number"]').click();
  // Fill [placeholder="Phone Number"]
  await page.locator('[placeholder="Phone Number"]').fill('4494444444');
  // Click [placeholder="Address Line-1"]
  await page.locator('[placeholder="Address Line-1"]').click();
  // Fill [placeholder="Address Line-1"]
  await page.locator('[placeholder="Address Line-1"]').fill('hola');
  // Click [placeholder="Address Line-2"]
  await page.locator('[placeholder="Address Line-2"]').click();
  // Fill [placeholder="Address Line-2"]
  await page.locator('[placeholder="Address Line-2"]').fill('hi');
  // Click [placeholder="State"]
  await page.locator('[placeholder="State"]').click();
  // Fill [placeholder="State"]
  await page.locator('[placeholder="State"]').fill('TN');
  // Click [placeholder="Postal-Code"]
  await page.locator('[placeholder="Postal-Code"]').click();
  // Press End
  await page.locator('[placeholder="Postal-Code"]').press('End');
  // Press ArrowDown
  await page.locator('[placeholder="Postal-Code"]').press('ArrowDown');
  // Press PageDown
  await page.locator('[placeholder="Postal-Code"]').press('PageDown');
  // Click [placeholder="Postal-Code"]
  await page.locator('[placeholder="Postal-Code"]').click();
  // Fill [placeholder="Postal-Code"]
  await page.locator('[placeholder="Postal-Code"]').fill('12345');
  // Select Mexico
  await page.locator('text=CountryAfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguilla >> select').selectOption('Mexico');
  // Fill input[name="dob"]
  await page.locator('input[name="dob"]').fill('2002-09-06');
  // Check text=Female >> input[name="gender"]
  await page.locator('text=Female >> input[name="gender"]').check();
  // Check input[type="checkbox"]
  await page.locator('input[type="checkbox"]').check();
  // Click input[type="submit"]
  await page.locator('input[type="submit"]').click();
  await expect(page).toHaveURL('https://letcode.in/forms');
  // Click text=Sign out
  await page.locator('text=Sign out').click();
  await expect(page).toHaveURL('https://letcode.in/');


})

  xtest('Open Letcode', async () => {
    const browser = await chromium.launch({
      headless: false
    })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://Letcode.in/');
    await page.click("text=Log in");
    await page.fill("input[name='email']", 'aloyami13@gmail.com');
    await page.fill("input[name='password']", 'kimyami13');
    await page.click('button:text("LOGIN")')
    await page.click('"Sign out"');
    await browser.close()
  })
})