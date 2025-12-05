import {expect, test} from "@playwright/test";
import GaragePage from "../../../src/pageObjects/garage/GaragePage.js";
import MainPage from "../../../src/pageObjects/main/MainPage.js";

test.describe("Create car as guest user POM 2 @my-label", () => {
    let garagePage;

    test.beforeEach(async ({page}) => {
        const mainPage = new MainPage(page)
        garagePage = new GaragePage(page)

        await test.step("Login as guest", async () => {
            await mainPage.navigate()
            await mainPage.loginAsGuest()
        })
    })

    test('Create car', async ({page}) => {
        await test.step("Create a new car with sessionStorage", async () => {
            const data = {
                "expenses": [],
                "cars": [
                    {
                        "id": 1,
                        "brand": "Audi",
                        "model": "TT",
                        "logo": "audi.png",
                        "initialMileage": 123,
                        "updatedMileageAt": "2025-12-05T17:21:40.272Z",
                        "carCreatedAt": "2025-12-05T17:21:40.272Z",
                        "carBrandId": 1,
                        "carModelId": 1,
                        "mileage": 123
                    },
                ],
                "nextCarId": 2,
                "nextExpenseId": 1
            }

            await page.evaluate(async (guestData) => {
                window.sessionStorage.setItem("guestData", JSON.stringify(guestData))
            }, data)


            await page.reload()

            const sessionStorageData = await page.evaluate(() => {
                return window.sessionStorage.getItem("guestData")
            })

            expect(JSON.parse(sessionStorageData)).toEqual(data)
        })
    })
})