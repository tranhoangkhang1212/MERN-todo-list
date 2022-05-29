import mongoose from 'mongoose'

const { Schema } = mongoose

const User = new Schema({
    name: String,
    email: String,
    age: Number,
})

export default mongoose.model('User', User)
