import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { filterTodo } from '@/redux/todoSlice'

import styles from './todo-filters.module.scss'

const TodoFilters = () => {
    const dispatch = useDispatch()

    return (
        <div className={styles.todo_filter}>
            <div className={styles.button_group}>
                <Button
                    type='primary'
                    size='middle'
                    onClick={() => dispatch(filterTodo({ status: 'All' }))}
                >
                    All
                </Button>
                <Button
                    type='primary'
                    size='middle'
                    onClick={() => dispatch(filterTodo({ status: false }))}
                >
                    Doing
                </Button>
                <Button
                    type='primary'
                    size='middle'
                    onClick={() => dispatch(filterTodo({ status: true }))}
                >
                    Done
                </Button>
            </div>
        </div>
    )
}

export default TodoFilters
