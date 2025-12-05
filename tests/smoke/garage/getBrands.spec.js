import {expect, test} from "@playwright/test";


test.describe("Get car brands API @my-label", () => {
    test('C39: Get car brands', async ({request}) => {
        const response = await request.get('/api/garage/brands')
        const responseBody = await response.json();
        expect(responseBody).toEqual({})
    })
})