import {Builder, By, until, WebDriver, WebElement} from "selenium-webdriver";
import assert from "assert";
import * as Assert from "assert";
import {
    loginLink,
    loginButton,
    cartButton,
    text,
    input,
    frame,
    searchImage,
    linkToTheNews,
    checkImage,
    searchLink,
    searchButton
} from "./locators";


const driver: WebDriver = new Builder().forBrowser("chrome").build();
const URL: string = "https://www.onliner.by/";


describe("onliner.by testing", () => {

    it("Check login page", async () => {
        await driver.manage().window().maximize();
        await driver.get(URL);
        const element: WebElement = await driver.findElement(By.xpath(loginButton));
        await element.click();
        await driver.wait(until.elementLocated(By.css(loginLink)));
        const link: WebElement = await driver.findElement(By.css(loginLink));
        assert(link.isDisplayed(), "Error: login page is not opened");

        await driver.quit();
    });
    it("Check shopping cart", async () => {
        await driver.manage().window().maximize();
        await driver.get(URL);
        const cart: WebElement = await driver.findElement(By.css(cartButton));
        await cart.click();
        await driver.wait(until.elementLocated(By.css(text)));
        const checkText: WebElement = await driver.findElement(By.css(text));
        Assert.equal(await checkText.getText(), "Корзина");
        await driver.quit();

    });
    it("Check input field", async () => {
        await driver.manage().window().maximize();
        await driver.get(URL);
        const inputField: WebElement = await driver.findElement(By.className(input));
        await inputField.sendKeys("Lenovo");
        await driver.switchTo().frame(driver.findElement(By.xpath(frame)));
        const image: WebElement = await driver.findElement(By.css(searchImage));
        assert(image.isDisplayed(), "Error: image is not displayed");

        await driver.quit();


    });
    it("Check news link", async () => {
        await driver.manage().window().maximize();
        await driver.get(URL);
        const newsLink: WebElement = await driver.findElement(By.css(linkToTheNews));
        await newsLink.click();
        const image: WebElement = await driver.findElement(By.className(checkImage));
        assert(image.isDisplayed(), "Error:image is not displayed");
    });
    it("Check is the button enabled", async () => {
        await driver.manage().window().maximize();
        await driver.get(URL);
        const newsLink: WebElement = await driver.findElement(By.xpath(searchLink));
        await newsLink.click();
        await driver.wait(until.elementLocated(By.xpath(searchButton)));
        const checkButton: WebElement = await driver.findElement(By.xpath(searchButton));
        assert(checkButton.isEnabled(), "Error: button is not enabled");
        await driver.quit();
    });
});