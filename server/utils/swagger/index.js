const swagger = (app, port) => {
    const swaggerDefinition = {
        servers: [`http://localhost:${port}`],
        produces: ['application/json'],
    }

    const swaggerJsDoc = require('swagger-jsdoc')
    const swaggerUi = require('swagger-ui-express')

    const swaggerOptions = {
        swaggerDefinition,
        apis: ['./src/routes/*.js'],
    }

    /**
     * @param {express} app
     */

    app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerJsDoc(swaggerOptions)),
    )
}

export default swagger
