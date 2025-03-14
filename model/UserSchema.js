const mongoose = require('mongoose');
const UserSchema  =new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            unique:true
        },
        displayName:{
            type:String,
            required:true

        },
        password:{
            type:String,
            required:true

        },
        role:{
            type:Array,
            required:true

        },
        isActive:{
            type:Boolean,
            required:true

        },
        otp:{
            type:Number,

        },
        billingAddres:{
            type:Object

        },
        shippingAddress: {
            type: Object

        },
        avatar:{
            type:Object
        }

    }
);

module.exports=mongoose.model('user',UserSchema);