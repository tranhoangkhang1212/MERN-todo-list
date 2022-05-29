import { Button, Row } from 'antd'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'
import styles from './customer.module.scss'

const Customer = () => {
    return (
        <Row
            justify='space-between'
            align='middle'
            className={styles.container}
        >
            <Button icon={<MenuOutlined />} />
            <div className={styles.user_icon}>
                <UserOutlined />
            </div>
        </Row>
    )
}

export default Customer
