const mongoose = require('mongoose');
const ProductSchema  =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        catagory:{
            type:String,
         
        },
        dealData:{
            type:Object,
            required:true
        },
        displayPrice:{
            type:Number
        },
        actualPrice:{
            type:Number
        },
        images:{
            type:Array
        },
        qty:{
            type:Number,
            required:true
        },
        brand:{
            type:String,
            required:true
        }


    }
);
module.exports=mongoose.model('product',ProductSchema);