import { Schema, model, version } from "mongoose";

// Creando schema 
const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    versionKey: false
})

// Creando modelo de datos

export default model('Task', taskSchema);