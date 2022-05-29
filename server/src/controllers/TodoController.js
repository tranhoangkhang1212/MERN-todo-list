import Todo from '@models/Todo'
class TodoController {
    // [GET] /todos/all
    index(req, res) {
        Todo.find({}, (err, users) => {
            if (!err) return res.json(users)
            res.status(500).json({ error: 'Internal server!' })
        })
    }

    // [GET]  /todos/:id
    getTodoByID(req, res) {
        User.findById(req.params.id, (err, user) => {
            if (!err) return res.json(user)
            res.status(400).json({ error: 'User do not exist!' })
        })
    }

    // [GET] /todos?name=''
    getTodosByName(req, res) {
        const query = { name: req.query.name }
        User.find({}, query, (err, users) => {
            if (!err) return res.json(users)
            res.status(400).json({ error: 'Cannot find user!' })
        })
    }

    // [POST] /user/create
    create(req, res) {
        const data = req.rawBody
        res.json(data)
    }
}

export default new TodoController()
