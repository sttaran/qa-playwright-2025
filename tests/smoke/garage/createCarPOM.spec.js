import {expect, test} from "@playwright/test";
import GaragePage from "../../../src/pageObjects/garage/GaragePage.js";
import MainPage from "../../../src/pageObjects/main/MainPage.js";


test.describe("Create car as guest user POM", () => {
    let garagePage;

    test.beforeEach(async ({page}) => {
        const mainPage = new MainPage(page)
        garagePage = new GaragePage(page)

        await mainPage.navigate()
        await mainPage.loginAsGuest()
    })

    test('Create car', async () => {
        const brand = 'Audi'
        const model = 'TT'
        const mileage = '222'

        await garagePage.createCar({brand, model, mileage})

        await expect(garagePage.carCard, "Car should have valid brand").toContainText(brand)
        await expect(garagePage.carCard, "Car should have valid model").toContainText(model)
        await expect(garagePage.carCardMileageInput, "Car should have valid mileage").toHaveValue(mileage)
    })

})

test.describe.only("Create car as guest user POM 2 @my-label", () => {
    let garagePage;

    test.beforeEach(async ({page}) => {
        const mainPage = new MainPage(page)
        garagePage = new GaragePage(page)

        await test.step("Login as guest", async () => {
            await mainPage.navigate()
            await mainPage.loginAsGuest()
        })
    })

    test('C38: Create car', async () => {
        const brand = 'Audi'
        const model = 'TT'
        const mileage = '222'

        await test.step("Create a new car", async () => {
            const addCarPopup = await garagePage.openAddCarPopup()
            await addCarPopup.createCar({brand, model, mileage})
        })

        await test.step("Verify created car details", async () => {
            const carCard = await garagePage.getCarCard({brand, model})
            await carCard.assertBrand(brand)
            await carCard.assertModel(model)
            await carCard.assertMileage(mileage)
        })
    })
})