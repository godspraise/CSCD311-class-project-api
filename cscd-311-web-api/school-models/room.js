
const mongoose = require ('mongoose');

const roomschema = mongoose.Schema({
    roomnumber :{
        type:String,
        required:true,
        trim:true
 },

    hall: {
        type:String,
        required:true,
        trim:true

    } , 
    occupants:[
        mongoose.Schema.Types.ObjectId
    ],
    is_assigned:{
        type:Boolean,
        default:false
    }


})

const Room = new mongoose.model('Room',roomschema);
module.exports= roomschema;