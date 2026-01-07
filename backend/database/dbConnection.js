import mongoose from "mongoose";

 export const dbConnection=()=>{

  mongoose.connect(process.env.DATABASE_URL ,{
    dbName:"RESTAURANT",
  }).then((r)=>{
    console.log(`connected to db is successfully to ${r.connection.host}`);
  }).catch(err=>{
    console.log(`some err come in connection to db is ${err}`);

  })
}