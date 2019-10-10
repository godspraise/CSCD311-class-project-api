require('../connection/connection')


const mongoose = require('mongoose')

const student_schema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    level:{
        type: String,
        required:true,
        trim: true,
        validate: function(value){
            if(value != "100" && value != "200" && value != "300" && value != "400"){
                throw new Error('Invalid Level')
            }
        }
    },
    gender:{
        type: String,
        trim: true,
        required:true,
        lowercase: true,
        validate: function(value){
            if (value != "m" && value != "f")
            throw new Error ('Invalid Gender')
        }
    },
    student_id:{
        type: String,
        trim: true,
        required: true,
        unique:true
    },
    is_assigned:{
        type: Boolean,
        default: false
    },
    pin:{
        type: String,
        trim: true,
        required: true 
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Room'
    }
})

const Student = new mongoose.model('Student', student_schema) 

module.exports = Student