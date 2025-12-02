import {expect, test} from "@playwright/test";


test.describe.only("Get car brands API @my-label", () => {
    test('Get car brands', async ({request}) => {
        const response = await request.get('/api/garage/brands')
        const responseBody = await response.json();
        expect(responseBody).toEqual({})
    })
})