import mongoose from 'mongoose'

const { Schema } = mongoose

const Todo = new Schema({
    id: String,
    name: String,
    priority: String,
    completed: Boolean,
    dateCreated: Date,
})

export default mongoose.model('Todo', Todo)
