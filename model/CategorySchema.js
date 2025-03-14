const mongoose = require('mongoose');
const CatagorySchema  =new mongoose.Schema(
    {
        category:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,


        },
        image:{
            type:String,
            required:true
        }

    }
);
module.exports = mongoose.model('category',CatagorySchema);