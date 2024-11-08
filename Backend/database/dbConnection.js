import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "Shraddhas_Restaurant",
    })
    .then(()=>{
       console.log("Connected to database successfully");
    })
    .catch(err=>{
        console.log(`some eror occured while connecting to database ${err}`);
    });
};