import { useDispatch } from 'react-redux'
import { deleteTodo, updateStatus } from '@/redux/todoSlice'
import TodoItem from './TodoItem'
import styles from './todo-list.module.scss'

const TodoList = ({ todos }) => {
    const dispatch = useDispatch()

    const handleDelete = id => {
        dispatch(deleteTodo({ id: id }))
    }

    const handleChangeStatus = (id, completed) => {
        dispatch(updateStatus({ id: id, completed: !completed }))
    }

    return (
        <div className={styles.todo_list}>
            <h2>Todo List</h2>
            <div className={styles.content}>
                {todos.map(todo => (
                    <TodoItem
                        key={todo._id}
                        {...todo}
                        handleDelete={() => handleDelete(todo.id)}
                        handleChangeStatus={() =>
                            handleChangeStatus(todo.id, todo.completed)
                        }
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList
