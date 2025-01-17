const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClassSchema = new Schema(
    {
        date : {
            type : Date,
            required : true
        },
        note : {
            type : String,
            default : "-"
        },
        paid : {
            type : Boolean,
            default : false
        },
        parentId : Schema.Types.ObjectId,
    },
    { timestamps: true, versionKey: false }
)


const Class = mongoose.model('class', ClassSchema)

module.exports = Class

