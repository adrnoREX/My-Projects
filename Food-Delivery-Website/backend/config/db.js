import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rupamsen195:Sagarsen02@cluster0.vzuipov.mongodb.net/food-delivery-website').then(()=>console.log("Database Connected"));
}
