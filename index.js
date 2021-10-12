//imports
const express= require("express")
const bodyParser = require("body-parser")
// const banksDb=require("./db")
// const BankModel= require("./model")
const mongoose=require("mongoose")
const {createBankController, listBanksController, deleteBankController, updateBankController, createAccountController}=require("./controllers")

//server instance
const server= express()

//middleware
server.use(bodyParser.json())

// //database
// let banksDb=[]

// //Bank models
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

// //Controllers or request hanlders
// const listBanksController=(req,res)=>{
//     //list all banks
//     const banks=BankModel.all()
//     res.json({data:banks})
// }

// const createBankController=(req, res)=>{
//     //create a bank
//     const {name, location, branch, phone, address, accountNumber}= req.body
//     const bank=new BankModel({name, location, branch, phone, address, accountNumber})
//     bank.save()
//     res.json({message: "Creation successful", data:bank})
// }

// const updateBankController=(req, res)=>{
//     //update a bank
//     const {name, location, branch, phone, address, accountNumber}= req.body
//     const updatedBank=BankModel.update({name, location, branch, phone, address, accountNumber})
//     res.json({message:"Update successful", data: updatedBank })
// }

// const deleteBankController=(req, res)=>{
//     //delete a bank
//     const{name}=req.body
//     //Filter to find match
//     const deletedBank= BankModel.delete({name})
//     res.json({message:"bank deleted", data:deletedBank})
// }

//routes
//View banks
server.get("/bank/:name?", listBanksController)

//Create bank
server.post("/bank", createBankController)

//Update a bank
server.put("/bank", updateBankController)

//delete bank
server.delete("/bank", deleteBankController)

//Create account
server.post("/account", createAccountController)

//Connect to database and start server
mongoose.connect("mongodb+srv://dsereboo:s8LCfgWYbgat3ZL@cluster0.ajmoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(
    result=>{
        server.listen(3000, ()=>{console.log("Server is running")})
    }
). catch(
    err=>{console.log(err)}
)
