import { Spin } from 'antd'

export const Loading = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '12px',
            }}
        >
            <Spin tip='Loading ...' />
        </div>
    )
}
