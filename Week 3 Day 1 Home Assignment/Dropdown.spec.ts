//Leafground Dropdown
import test from "@playwright/test";

test('This is to test to dropwdown', async ({ page }) => {

    await page.goto("https://leafground.com/select.xhtml")
    await page.locator("//select[@class='ui-selectonemenu']").click()
    await page.selectOption('.ui-selectonemenu', { label: "Playwright" })
    const ddEle = page.locator("//select[@class='ui-selectonemenu']/option")
    const count = await ddEle.count()
    console.log(count)
    const ddEleTxt = await ddEle.allInnerTexts()
    console.log("Dropdown Options : " + ddEleTxt)
    await page.locator("//label[text()='Select Country']").click()
    await page.locator("//li[@data-label='India']").click()
    await page.locator("//label[text()='Select City']").click()
    await page.locator("//li[@data-label='Bengaluru']").click()
    await page.locator("//button[@aria-label='Show Options']").click()
    await page.locator("//li[@data-item-value='Playwright']").click()
    await page.locator("//li[@data-item-value='AWS']").click()
    await page.locator("//li[@data-item-label='RestAssured']").click()
    const courseDropdownEle = page.locator("//div[@class='ui-autocomplete ui-autocomplete-multiple']")
    console.log(await courseDropdownEle.textContent())
    await page.locator("//label[text()='Select Language']").click()
    await page.locator("//li[@data-label='Kannada']").click()
    let ddLangDd = page.locator("(//ul[@class='ui-selectonemenu-items ui-selectonemenu-list ui-widget-content ui-widget ui-corner-all ui-helper-reset'])[2]/li")
    const countLangDd = await ddLangDd.count()
    console.log(countLangDd)
    const LangddEle = await ddLangDd.allInnerTexts()
    console.log("Langauge dropdown : " + LangddEle)
    await page.locator("//label[text()='Select Values']").click()
    await page.locator("//li[@data-label='ಒಂದು']").click()

})