import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addInitTodo } from '@/redux/todoSlice'
import { useFetchData } from '@hooks'
import AddNewTodo from './AddNewTodo'
import TodoFilters from './TodoFilters'
import TodoList from './TodoList'
import DeleteTodo from './DeleteTodo'
import styles from './todo.module.scss'
import { Loading } from '@components/Common'

const Todo = () => {
    const { todos } = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [isLoading, data] = useFetchData('todos/all')

    useEffect(() => {
        dispatch(addInitTodo({ data: data }))
    })

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <AddNewTodo />
                    {isLoading && <Loading />}
                    {isLoading === false && todos.length > 0 && (
                        <>
                            <TodoFilters />
                            <TodoList todos={todos} />
                            <DeleteTodo />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Todo
