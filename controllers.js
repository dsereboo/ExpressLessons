//Import banks model
const BankModel= require("./model")
const AccountModel= require("./AccountModel")

//Using Mongoose
const createBankController=(req,res)=>{
    const {name, location, branch, phone, address, accountNumber}= req.body
    //New banks model
    const bank=new BankModel({name, location, branch, phone, address, accountNumber})
    //Query on model
    bank.save()
    .then(
        result=>  res.json({message: "Creation successful", data:result})
    ).catch(
        err=> console.log(err)
    )
}

const listBanksController=(req,res)=>{
    //Accessing id passed with route
    const{name}= req.params
    if(name){
    BankModel.find({name:name})
    .then(
        banks=> res.json({data:banks})
    ).catch(
        err=>console.log(err)
    )}
    else{
        BankModel.find()
        .then(
            banks=> res.json({data:banks})
        ).catch(
            err=>console.log(err)
        )}  
}

const deleteBankController=(req, res)=>{
    const {id}=req.body
    BankModel.findByIdAndRemove(id).then(
        deletedBank=>{ res.json({message:"bank deleted", data:deletedBank})}
    ).catch(
        err=>{console.log(err)}
    )
   
}

const updateBankController=(req, res)=>{
    const {id, name, location, branch, phone, address, accountNumber}= req.body
    BankModel.find({_id:id}).then(
        bank=>{if(bank.length>0){
            bank[0].name=name;
            bank[0].location=location;
            bank[0].branch=branch;
            bank[0].phone=phone;
            bank[0].address=address;
            bank[0].accountNumber=accountNumber;
            bank[0].save()
            res.json({message:"updated successfully", data:bank[0]})

        }
    }
    ).catch(
        err=>console.log(err)
    )
}

const createAccountController=(req, res)=>{
    const{name, number, accountType, bankId}=req.body
    
    const account= new AccountModel({name, number, accountType, bankId})

    account.save()
    .then(
        result=>{
            if(result){
                res.json({message:"Account created", data:result})

            }
            else{
                res.json({message:"Failed to create Account"})
            }
        }
    )
}

//Controllers or request hanlders
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

module.exports={createBankController, listBanksController, deleteBankController, updateBankController, createAccountController
}