import mongoose from "mongoose";

const UserChatSchema = new mongoose.Schema({
    username: {type : String,unique:true},
    password:String,
    message:[] 
},{collection:"User"})
const UserChat = mongoose.models.User || mongoose.model("User",UserChatSchema);

export default UserChat