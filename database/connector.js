import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/e-store"
async function dbConnect()
{
    await mongoose.connect(url);
    let _schema = mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        colors:Array
    });

    return mongoose.model("headphones",_schema);
}


export {dbConnect}

