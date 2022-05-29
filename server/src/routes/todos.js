import { Router } from 'express'
import todoController from '@controllers/TodoController'

const router = Router()

/**
 * @swagger
 * /todos/all:
 *  get:
 *    produces:
 *      - application/json
 *    tags:
 *      - 'Todo items'
 *    responses: {}
 */
router.get('/all', todoController.index)

/**
 * @swagger
 * /todos/{id}:
 *  get:
 *    tags:
 *      - 'Todo items'
 *    parameters:
 *      - name: id
 *        in: path
 *        description: User ID
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: User response
 */
router.get('/:id', todoController.getTodoByID)

/**
 * @swagger
 * /todos?name=?:
 *  get:
 *    produces:
 *      - application/json
 *    tags:
 *      - 'Todo items'
 *    parameters:
 *      - name: 'name'
 *        in: query
 *        description: 'Input username'
 *        required: true
 *        type: string
 *    responses: {}
 */
router.get('/', todoController.getTodosByName)

export default router
