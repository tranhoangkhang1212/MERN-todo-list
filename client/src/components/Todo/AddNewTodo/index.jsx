import { v4 as uuidv4 } from 'uuid'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input, Select, Tag } from 'antd'
import { MdOutlineMenuBook } from 'react-icons/md'
import { addTodo } from '@/redux/todoSlice'
import { priorityColorMapping } from '@common/utils'
import { newTodoBaseData as newTodo } from '@common/model'
import styles from './add_new_todo.module.scss'

const { Option } = Select

const AddNewTodo = () => {
    const inputRef = useRef()
    const priorityOption = ['High', 'Medium', 'Low']
    const dispatch = useDispatch()

    const [newTodoBaseData, setNewTodoBaseData] = useState(newTodo)

    const handleInputChange = e => {
        setNewTodoBaseData({
            ...newTodoBaseData,
            id: uuidv4(),
            name: e.target.value,
        })
    }

    const handlePriorityChange = value => {
        setNewTodoBaseData({
            ...newTodoBaseData,
            priority: value,
        })
    }

    const addNewTodo = () => {
        dispatch(addTodo({ data: newTodoBaseData }))
        inputRef.current.input.value = ''
    }

    return (
        <div className={styles.add_new_container}>
            <h2>Todo Input</h2>
            <div className={styles.content}>
                <div className={styles.input}>
                    <div className={styles.input_icon}>
                        <MdOutlineMenuBook />
                    </div>
                    <Input
                        ref={inputRef}
                        onChange={handleInputChange}
                        placeholder='Todo name'
                        onPressEnter={addNewTodo}
                    />
                    <Select
                        className={styles.select}
                        defaultValue={priorityOption[1]}
                        onChange={handlePriorityChange}
                    >
                        {priorityOption.map(priority => (
                            <Option key={priority} value={priority}>
                                <Tag color={priorityColorMapping[priority]}>
                                    {priority}
                                </Tag>
                            </Option>
                        ))}
                    </Select>
                </div>
                <Button
                    size='large'
                    type='primary'
                    className={styles.add_btn}
                    onClick={addNewTodo}
                >
                    Add new task
                </Button>
            </div>
        </div>
    )
}

export default AddNewTodo
