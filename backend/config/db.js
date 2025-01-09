import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://parveg:rV2WLY9WyRbAzdEn@cluster0.n19ei.mongodb.net/food-del').then(()=>{
       console.log('DB connected') ;
    })
}
//mongodb+srv://parveg:RTERTGFGCBCVB@34345TDFVF@cluster0.s8vnw.mongodb.net/?
//mongodb+srv://parveg:rV2WLY9WyRbAzdEn@cluster0.n19ei.mongodb.net/food-del
//rV2WLY9WyRbAzdEn