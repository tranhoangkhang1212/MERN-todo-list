import todoRouter from './todos'

const routes = (app) => {
    app.get('/', (req, res) => res.redirect('/api-docs'))
    app.use('/todos', todoRouter)
}

export default routes
