/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created*/

import { Browser, BrowserContext, chromium, Page, test } from "@playwright/test";

test('Login to salesforce application', async () => {
    const browser = await chromium.launch()
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://login.salesforce.com")
    await page.locator('#username').fill("vidyar@testleaf.com")
    await page.locator('#password').fill("Sales@123")
    await page.locator('#Login').click()
    await page.locator("[title='App Launcher']").click()
    await page.locator("[aria-label='View All Applications']").click()
    await page.locator("xpath=//p[text()='Sales']").click()
    await page.locator("[title='Leads']").click()
    await page.locator("xpath=//div[text()='New']").click()
    let salutaion = await page.locator("[name='salutation']").click()
    await page.locator("[title='Mr.']").click()
    await page.locator("[name='lastName']").fill("Bond")
    await page.locator("[name='Company']").fill("JamesBond Spy Company")
    await page.locator("[name='SaveEdit']").click()
    let toastMessage = await page.locator(".toastMessage").innerText()
    console.log("Lead created : " + toastMessage)
})

/*Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

test('Edit Lead', async () => {
    const browser = await chromium.launch()
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator("//div[@id='label']//a").click()
    await page.locator("//div//a[text()='Leads']").click()
    await page.locator("//li//a[text()='Create Lead']").click()
    await page.locator("#createLeadForm_companyName").fill("Playwright_1")
    await page.locator("#createLeadForm_firstName").fill("Playwright_TS")
    await page.locator("#createLeadForm_lastName").fill("Playwright_JS")
    await page.locator(".smallSubmit").click()
    await page.locator("//a[text()='Edit']").click()
    await page.locator("#updateLeadForm_companyName").clear()
    await page.locator("#updateLeadForm_companyName").fill("Playwright_JB")
    await page.locator("[value='Update']").click()
    let companyName = await page.locator("#viewLead_companyName_sp").innerText()
    console.log(companyName)
})

/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name*/

test('Create Individuals', async () => {
    const browser = await chromium.launch()
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://login.salesforce.com")
    await page.locator('#username').fill("vidyar@testleaf.com")
    await page.locator('#password').fill("Sales@123")
    await page.locator('#Login').click()
    await page.locator("[title='App Launcher']").click()
    await page.locator("[part='input']").fill('individuals')
    await page.locator("//b[text()='Individuals']").click()
    await page.locator("//div[@class='slds-grid slds-media__body']").click()
    await page.locator("[class='forceActionLink']").click()
    await page.locator("[placeholder='Last Name']").fill('Bondreturn')
    await page.locator("[title='Save']").click()
    let toastIndMessage = await page.locator(".toastMessage").innerText()
    console.log("New Individuals created : " + toastIndMessage)
})

/*Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

test('Edit Individuals', async () => {
    const browser = await chromium.launch()
    const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://login.salesforce.com")
    await page.locator('#username').fill("vidyar@testleaf.com")
    await page.locator('#password').fill("Sales@123")
    await page.locator('#Login').click()
    await page.locator("[title='App Launcher']").click()
    await page.locator("[aria-label='View All Applications']").click()
    await page.locator("[placeholder='Search apps or items...']").fill('Individuals')
    await page.locator("//mark[text()='Individuals']").click()
    await page.locator("[name='Individual-search-input']").fill('Bondreturn')
    await page.locator("(//span[@class='slds-icon_container slds-icon-utility-down'])[1]").click()
    await page.locator("//div[@title='Edit']").click()
    let salutaion = await page.locator("(//a[@role='combobox'])[1]").click()
    await page.locator("[title='Mr.']").click()
    await page.locator("[placeholder='First Name']").fill('BondAgain')
    await page.locator("(//span[text()='Save'])[2]").click()
    let editIndMessage = await page.locator(".toastMessage").innerText()
    console.log(editIndMessage)
})