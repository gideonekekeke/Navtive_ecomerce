import mongoose from "mongoose";

const url_offfline = "mongodb://localhost/nativeEcomerce"

const dbConfig = ()=>{
    mongoose.connect(url_offfline).then(()=>{
        
    })
}