import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaPencilAlt } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Checkbox, Input, Tag, Button } from 'antd'
import { priorityColorMapping } from '@common/utils'
import { updateTodoName } from '@/redux/todoSlice'
import styles from './todo-item.module.scss'

const TodoItem = ({
    id,
    name,
    dateCreated,
    priority,
    completed,
    handleDelete,
    handleChangeStatus,
}) => {
    const dispatch = useDispatch()
    const [updateTodoDisplay, setUpdateTodoDisplay] = useState(false)
    const todoNameRef = useRef()
    const [inputWidth, setInputWidth] = useState()
    const [todoNameUpdate, setTodoNameUpdate] = useState('')

    useEffect(() => {
        setInputWidth(todoNameRef.current.clientWidth)
    }, [])

    const handleTodoNameUpdate = e => {
        setTodoNameUpdate(e.target.value)
    }

    const handleSaveTodoNameUpdate = () => {
        setUpdateTodoDisplay(false)
        if (todoNameUpdate !== '') {
            dispatch(updateTodoName({ id: id, name: todoNameUpdate }))
        }
    }

    return (
        <div
            className={`${styles.todo_list_item} ${
                completed ? styles.disable : ''
            }`}
        >
            {updateTodoDisplay && (
                <div className={styles.update_todo}>
                    <Input
                        style={{
                            width: `${inputWidth + 12}px`,
                        }}
                        defaultValue={name}
                        onChange={handleTodoNameUpdate}
                        onPressEnter={handleSaveTodoNameUpdate}
                    />
                    <Button type='primary' onClick={handleSaveTodoNameUpdate}>
                        Save
                    </Button>
                </div>
            )}
            {!updateTodoDisplay && (
                <>
                    <h3 ref={todoNameRef}>{name}</h3>
                    <div className={styles.actions}>
                        <span className={styles.date}>{dateCreated}</span>
                        <Tag color={priorityColorMapping[priority]}>
                            {priority}
                        </Tag>
                        <div className={styles.actions_btn}>
                            <Checkbox
                                onChange={handleChangeStatus}
                                defaultChecked={completed}
                            />
                            <FaPencilAlt
                                className={styles.pen}
                                onClick={() => setUpdateTodoDisplay(true)}
                            />
                            <RiDeleteBin6Fill
                                className={styles.recycle}
                                onClick={handleDelete}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default React.memo(TodoItem)
