//Leafground Checkbox
import test, { expect } from "@playwright/test"

test('This is to test checkbox', async ({ page }) => {

    await page.goto("https://leafground.com/checkbox.xhtml")
    await page.locator("(//div[contains(@class,'ui-selectbooleancheckbox ui-chkbox')]//div)[2]").click()
    await page.locator("(//div[contains(@class,'ui-chkbox-box ui-widget ui-corner-all ui-state-default')])[2]").click()
    //div[@class='ui-growl-message']//span
    const notificationToastMessage = await page.locator("//div[@class='ui-growl-message']//span").innerText()
    expect(notificationToastMessage).toContain('Checked')
    console.log(notificationToastMessage)
    await page.locator("(//div[@class='ui-chkbox ui-widget'])[2]").click()
    const triStateCheckbox = page.locator("(//div[@id='j_idt87:ajaxTriState']//div)[2]")
    await triStateCheckbox.click()
    expect(triStateCheckbox).toBeEnabled();
    const toggleSwitch = page.locator("//div[@class='ui-toggleswitch ui-widget']")
    toggleSwitch.click()
    let toggleSwitchToastMessage = await page.locator("//div[@class='ui-growl-message']//span").innerText()
    expect(toggleSwitchToastMessage).toContain('Checked')
    let disabledCheckbox = page.locator("[disabled='disabled']")
    expect(disabledCheckbox).toBeDisabled()
    let cities = page.locator("[data-label='Cities']")
    await cities.click()
    await page.locator("(//input[@type='text'])[3]").fill("Paris")
    let option1 = page.locator("//div[@id='j_idt87:multiple_panel']/div[2]/ul[1]/li[3]/div[1]/div[2]")
    await option1.click()
    await page.locator("(//input[@type='text'])[3]").clear()
    await page.locator("(//input[@type='text'])[3]").fill("London")
    let option2 = page.locator("//div[@id='j_idt87:multiple_panel']/div[2]/ul[1]/li[2]/div[1]/div[2]")
    await option2.click()
let selectedOptions = page.locator("//ul[@class='ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all']")
    console.log(await selectedOptions.textContent())
    await page.close()
})

