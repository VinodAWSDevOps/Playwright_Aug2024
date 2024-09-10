//Auto Waiting
import test, { chromium, expect } from "@playwright/test"

test("This is to test autowait", async () => {
    const browser = await chromium.launch()
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://leafground.com/waits.xhtml")
    await page.locator("(//span[text()='Click'])[1]").click()
    const secondBtn = page.locator("//span[text()='I am here']")
    await secondBtn.waitFor({ state: "visible" })
    await page.locator("(//span[text()='Click'])[2]").click()
    const secondBtnHidden = page.getByText("I am about to hide")
    await secondBtnHidden.waitFor({ state: "hidden" })
    await page.getByText("Click First Button").click()
    const toastMessage = page.locator("//div[@class='ui-growl ui-widget']")
    await toastMessage.waitFor({ state: "hidden" })
    await page.locator("(//span[text()='Click'])[3]").click()
    const txtChangeBtn = page.locator("//span[text()='Did you notice?']")
    await txtChangeBtn.waitFor({ state: "visible" })
})