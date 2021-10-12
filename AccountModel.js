const mongoose= require("mongoose")

const Schema=mongoose.Schema


const AccountSchema= new Schema({
    name:{type:String, required:true},
    number:{type:String, required:true},
    accountType:{type:String, required:true},
    //Establishing a relationship with another model
    bankId:{type:Schema.Types.ObjectId, ref:"Bank",required:true,}
})

const AccountModel=mongoose.model("Account", AccountSchema)

module.exports=AccountModel