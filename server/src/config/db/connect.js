import mongoose from 'mongoose'

const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoList')
        console.log('Connect successfully')
    } catch (err) {
        console.log('Connect failed')
        throw new err()
    }
}

export default dbConnect
