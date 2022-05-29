import { useState, useEffect } from 'react'
import axios from 'axios'

const request = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
})

export const useFetchData = (path, params = {}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await request.get(path, params)
            if (response.status === 200) {
                setData(response.data || [])
            }
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [isLoading, data]
}
