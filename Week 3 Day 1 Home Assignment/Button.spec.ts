//Leafground Button
import test, { expect } from "@playwright/test";

test('This is to test button', async ({ page }) => {
    await page.goto("https://leafground.com/button.xhtml")
    await page.locator("//span[text()='Click']").click()
    await page.waitForTimeout(3000)
    let titleDashboard = await page.title()
    console.log("The title of the Dashboard page is : "+titleDashboard)
    await expect(page).toHaveTitle('Dashboard')
    let btnDisable = page.locator("//button//span[text()='Disabled']")
    await page.goBack()
    await expect(btnDisable).toBeDisabled()
    await page.locator("//button//span[text()='Image']").click()
    let hiddenBtn = await page.$("//Button//span[text()='Primary']");
    expect(hiddenBtn).not.toHaveProperty('hidden')
    let btn = page.locator("//h5[contains(text(),'How many rounded')]//following::button")
    console.log("The number of round/pills button are : " +await btn.count())
})