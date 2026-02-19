const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
    {
        mood: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true
        }
        
    },
    {
            timestamps: true,
        }
)
const notedb = mongoose.model('notedb', noteSchema)
module.exports = notedb