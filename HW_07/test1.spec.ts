import {Builder, By, WebDriver, WebElement} from "selenium-webdriver";

describe("My first suite", () => {
    // it("My first test", async () => {
    //     const driver: WebDriver = await new Builder().forBrowser("chrome").build();
    //     await driver.manage().window().maximize();
    //     await driver.get("https://rabota.by");
    //     const input: WebElement = await driver.findElement(By.css('[data-qa="search-input"]'));
    //     await input.sendKeys("TypeScript");
    //     const search: WebElement = await driver.findElement(By.css('button[data-qa="search-button"]'));
    //     await search.click();
    //     //await driver.manage().setTimeouts({implicit: 5000})
    //
    //     await driver.quit();
    // });
    it("Test 2", async () => {
        const driver: WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.onliner.by/");
        const input: WebElement = await driver.findElement(By.xpath("//div[text()=\"Вход\"]"));
        await input.click();
        await driver.findElement(By.xpath("//button[@class=\"auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full\"]")).getText()
        await driver.quit();
    });
});