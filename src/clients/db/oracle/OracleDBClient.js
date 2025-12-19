import oracledb from "oracledb";
import UsersTableController from "./UsersTableController.js";

export default class OracleDBClient {
    constructor(connection) {
        this.usersTable = new UsersTableController(connection)
    }
}