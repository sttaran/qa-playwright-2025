import { baseCustomFixture as base } from "./baseCustomFixture.js";
import {request as pwRequest} from "@playwright/test";
import GaragePage from "../pageObjects/garage/GaragePage.js";
import ApiClient from "../clients/api/ApiClient.js";
import OracleDBClient from "../clients/db/oracle/OracleDBClient.js";
import oracledb from "oracledb";

type AdminFixture = {
    oracleDBClient: OracleDBClient
    apiClient: ApiClient
    garagePage: GaragePage
}

// withNewUser
export const adminFixture = base.extend<AdminFixture>({
    page: async ({browser}, use)=> {
        const ctx = await browser.newContext({
            storageState: 'state/adminStorageState.json'
        })
        const page = await ctx.newPage()
        await use (page)
    },
    request: async ({}, use)=> {
        const ctx = await pwRequest.newContext({
            storageState: 'state/adminStorageState.json'
        })

        await use(ctx)
    },
    oracleDBClient: async ({}, use)=> {
        // create conenction

        const connection = await oracledb.getConnection ({
            user          : "hr", // from .env or config
            password      : "mypw", // from .env or config
            connectString : "localhost/FREEPDB1" // from .env or config
        });
        // pass to test
        const oracleDBClient = new OracleDBClient(connection)
        await use(oracleDBClient)
        // close connection
        await connection.close();

    },
    apiClient: async ({request}, use)=> {
        // Assuming ApiClient is defined elsewhere
        const apiClient = new ApiClient(request)
        await use(apiClient)
    },
    garagePage: async ({page}, use)=> {
        const garagePage = new GaragePage(page)
        await garagePage.navigate()
        await use (garagePage)
    },
})