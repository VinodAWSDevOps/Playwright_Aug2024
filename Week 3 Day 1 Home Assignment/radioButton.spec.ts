//Leafground Radio Button
import test, { expect } from "@playwright/test";

test('This is to test Radio Button', async ({ page }) => {
    await page.goto("https://leafground.com/radio.xhtml")
    const selectedRadioBtn = page.locator("(//span[@class='ui-radiobutton-icon ui-icon ui-icon-bullet ui-c'])[4]")
    expect(selectedRadioBtn).toBeEnabled()
    const chromeRadioBtn = page.locator("(//span[@class='ui-radiobutton-icon ui-icon ui-icon-blank ui-c'])[9]")
    await chromeRadioBtn.click()
    expect(page.locator("(//label[text()='Chrome'])[1]")).toBeChecked()
    const city = page.locator("(//div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default'])[13]")
    await city.click()
    await page.waitForTimeout(3000)
    const age = page.locator("(//div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active'])[5]")
    expect(age).toBeEnabled()
})

