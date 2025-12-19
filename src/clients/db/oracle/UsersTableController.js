

export default class UsersTableController {
    constructor(connection) {
        this.connection = connection
    }

    async getAllUsers() {
        const result = await this.connection.execute(`SELECT * FROM users`)
        return result.rows
    }

    async getUser(id) {
        const result = await this.connection.execute(`SELECT * FROM users WHERE id = ${id}`)
        return result.rows[0]
    }
}