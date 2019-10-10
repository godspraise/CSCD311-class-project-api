const mongoose = require('mongoose');

const hostelschema =mongoose.Schema ({
  name:{
      type:String,
      trim:true,
      required:true
  },

   location:{
       type:String,
       required:true
   },
   numberOfOccupants:{
       type: Number
   }

})

const Hostel = new mongoose.model('Hostel',hostelschema);
module.exports = Hostel;