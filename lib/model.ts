import mongoose,{Schema, Document, Model} from 'mongoose';

export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
}

const userSchema:Schema<IUser> = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})


const User: Model<IUser> = mongoose.models.People || mongoose.model<IUser>("People", userSchema);

export default User;