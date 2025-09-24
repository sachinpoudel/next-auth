import mongoose from 'mongoose';

const usermodel = new mongoose.Schema({
    name:String,
    email:String,
    password:String 
})

export default mongoose.models.User || mongoose.model("User", usermodel);