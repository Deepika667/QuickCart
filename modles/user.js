import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: {type : String , required : True}
    name: {type : String , required :True}
    email: {type : String , required : True  , unique : True}
    imageUrl: {type : String , reqired : True},
    cartItems: {type : Object , default : {} }
} , {minimize:false})
const User = mongoose.models.user || mongoose.model('user',userSchema)
export default User