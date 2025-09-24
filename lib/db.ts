import mongoose from 'mongoose';

const mongo_url = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';

export const dbconnect = async( ) =>  {
    try {
        const connect = await mongoose.connect(mongo_url);
        console.log("connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}