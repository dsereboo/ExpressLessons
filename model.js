//Import database
// let banksDb=require("./db")
const mongoose= require("mongoose")


//using mongoose model

const Schema= mongoose.Schema

//model schema
const BankSchema= new mongoose.Schema({
    name:{type:String, required:true},
    location:{type:String, required:true},
    branch:{type:String, required:true},
    address:String,
    accountNumber:{type:String, required:true},
    accounts:[{
        accountId:{required:true, type:Schema.Types.ObjectId, ref:"Account"},
    }]
})

const BankModel=mongoose.model("Bank", BankSchema)
//Bank models
// class BankModel{
//     constructor({name, location, branch, phone, address, accountNumber}){
//         this.name=name
//         this.location=location
//         this.branch=branch
//         this.phone=phone
//         this.address=address
//         this.accountNumber=accountNumber
//     }

//     save(){
//         banksDb.push(this)
//         return this;
//     }

//     static all(){
//         return banksDb;
//     }

//     static update(updatedInfo={}){
//         //find the bank to be updated
//         banksDb=banksDb.map(
//             bank=>{
//                 if(bank.name===updatedInfo.name){
//                     return{...bank, ...updatedInfo}
//                 }
//                 return bank;
//             }
//         )
//     }

//     static delete({name}){
//         let deletedBank=null
//         banksDb= banksDb.filter(
//             bank=>{if(bank.name!==name)
//                 {
//                     deletedBank=bank
//                     return true
//                 }
//                 return false
//             }
//         )
//     }
  
// }

module.exports= BankModel