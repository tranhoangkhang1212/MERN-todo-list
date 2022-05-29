import { Button } from 'antd'
import styles from './delete.module.scss'

const DeleteTodo = () => {
    return (
        <div className={styles.delete_btn_group}>
            <Button type='primary' size='middle'>
                Delete done tasks
            </Button>
            <Button type='primary' size='middle'>
                Delete all task
            </Button>
        </div>
    )
}

export default DeleteTodo
