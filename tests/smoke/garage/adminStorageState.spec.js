import {adminFixture} from "../../../src/customFixtures/adminFixture.js";
import {expect} from "../../../src/customFixtures/guestFixture.js";
import CreateCarDTOFactory from "../../../src/domain/cars/factory/CreateCarDTOFactory.js";

adminFixture.describe.only("use storage state @my-label", () => {
    adminFixture('Create car with UI', async ({page, garagePage}) => {
        await adminFixture.step("Verify created car details", async () => {
            await page.pause()
        })
    })

    adminFixture('Create car with API', async ({request}) => {
        const response = await request.post("/api/cars", {
            data : {"carBrandId":1,"carModelId":1,"mileage":321}
        })

        await expect(response).toBeOK()
    })

    adminFixture('Create car with API 2', async ({apiClient}) => {
        const body = {"carBrandId":2,"carModelId":8,"mileage":444}

        // const brandsResponse = await apiClient.cars.getCarBrands()
        const response = await apiClient.cars.createCar(body)

        await expect(response).toBeOK()
    })

    adminFixture('Create car with API BMW', async ({apiClient}) => {
        const body = CreateCarDTOFactory.bmwX5(456)

        // const brandsResponse = await apiClient.cars.getCarBrands()
        const response = await apiClient.cars.createCar(body.extract())

        await expect(response).toBeOK()
    })

    adminFixture('Create car with API Audi', async ({apiClient}) => {
        const body = CreateCarDTOFactory.audiA8(176)

        const response = await apiClient.cars.createCar(body.extract())

        await expect(response).toBeOK()
    })

    adminFixture('Create car with API Audi 2', async ({apiClient}) => {
        const body = CreateCarDTOFactory.empty()
            .setBrandId(1)
            .setModelId(5)
            .setMileage(999)

        const response = await apiClient.cars.createCar(body.extract())

        await expect(response).toBeOK()
    })
})