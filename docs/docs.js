const { port } = require("../config/config");
const { signupDoc, getDishesDoc } = require("./swagger.docs");

module.exports = {

    swaggerDocs: {

        openapi: "3.0.0",
        info: {
            title: 'Recipe app',
            version: '0.0.1',
            description: 'Documentation for recipe app'
        },
        servers: [
            {
                url: `http://localhost:${port}`,
                description: 'local server'
            },
            {
                url: `http://localhost:${port}`,
                description: 'production server'
            }
        ],
        tags: [
            {
                name: "authentication",
                description: "Authentication route",
            },
            {
                name: "foods",
                description: "Dishes route"
            }
        ],
        paths: {
            ...signupDoc,
            ...getDishesDoc,
        }
    }
}