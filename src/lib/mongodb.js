import mongoose from "mongoose";

// ดึง api เข้ามา
const publicAPI = process.env.PUBLICAPI;

let isConnented = false

if(!publicAPI){
    throw new Error("Please insert your urlapi")
}

// Create Function Connect
export async function ConnentToDatabase(url) {
     if(isConnented) 
     if(!url)throw new Error("MongoDB URL is Missing")

    try {
        await mongoose.connect(url)
        isConnented = true
        console.log("Mongo Connected")
    } catch (error) {
         console.log("MongoDB Connenting Erorr",error)
    throw error
    }
}