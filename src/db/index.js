import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://newuser1:root@learnscape.qvnha.mongodb.net/?retryWrites=true&w=majority&appName=Learnscape')
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGO ERROR", error.message);
        process.exit(1);
    }
};


export default connectDB;
