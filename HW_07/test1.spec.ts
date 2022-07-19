import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";
import assert from "assert";
import * as Assert from "assert";
import { URL } from "./URL";
import {
    loginLink, loginButton, cartButton, text, input, frame, searchImage,
    searchLink, searchButton, linkToTheProduct, checkText,
} from "./locators";


describe("onliner.by testing", () => {
    let driver: WebDriver;
    beforeEach(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get(URL);
    });
    afterEach(async () => {
        await driver.quit();
    });


    it("Check login page", async () => {
        const element: WebElement = await driver.findElement(By.xpath(loginButton));
        await element.click();
        await driver.wait(until.elementLocated(By.css(loginLink)));
        const link: WebElement = await driver.findElement(By.css(loginLink));
        assert(link.isDisplayed(), "Error: login page is not opened");
    });
    it("Check shopping cart", async () => {
        const cart: WebElement = await driver.findElement(By.css(cartButton));
        await cart.click();
        await driver.wait(until.elementLocated(By.css(text)));
        const checkText: WebElement = await driver.findElement(By.css(text));
        Assert.equal(await checkText.getText(), "Корзина");
    });
    it("Check input field", async () => {
        const inputField: WebElement = await driver.findElement(By.className(input));
        await inputField.sendKeys("Lenovo");
        await driver.switchTo().frame(driver.findElement(By.xpath(frame)));
        const image: WebElement = await driver.findElement(By.css(searchImage));
        assert(image.isDisplayed(), "Error: image is not displayed");
    });
    it("Check news link", async () => {
        const productLink: WebElement = await driver.findElement(By.xpath(linkToTheProduct));
        await productLink.click();
        const productName: WebElement = await driver.findElement(By.className(checkText));
        Assert.equal(await productName.getText(), "Триммеры");
    });
    it("Check is the button enabled", async () => {
        const newsLink: WebElement = await driver.findElement(By.xpath(searchLink));
        await newsLink.click();
        await driver.wait(until.elementLocated(By.xpath(searchButton)));
        const checkButton: WebElement = await driver.findElement(By.xpath(searchButton));
        assert(checkButton.isEnabled(), "Error: button is not enabled");
    });
});