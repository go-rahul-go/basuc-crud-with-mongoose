
import express from "express";
import { dbConnect } from "./database/connector.js";


//read all data in database
async function readData(alldata, query = {}) {
    let result = await dbConnect();
    let data;
    if (alldata) {
        data = await result.find(); //this will return all the data
    }
    else {
        data = await result.find(query)  //only specific data will return
    }
    return data;
}

//insert
async function insertData() {
    let result = await dbConnect();
    let data = await result.insertMany([
        { name: "infinite base 20", brand: "jbl", price: 569, colors: ["red", "black"] },
        { name: "super sound 5", brand: "sony", price: 119, colors: ["red", "white"] },
        { name: "crystal 5", brand: "skull candy", price: 909, colors: ["black", "green"] },
        { name: "connect x10", brand: "jbl", price: 2500, colors: ["black"] }
    ]);

    console.log(data)
}

// to find headphone with particular color
async function findHeadphones(color = null) {
    let result = await dbConnect();
    let data = await result.find();
    let available = [];
    data.forEach(items => {
        items.colors.forEach(itemcolor => {
            if (itemcolor == color)
                available.push(items.name);
        })
    })
    console.log(available)
}


//delete
async function deleteData(query = null) {

    if (query != null) {
        let result = await dbConnect();
        let data = await result.deleteOne(query);
        return data;
    }
    else {
        throw new Error("enter query");
    }




}

// deleteData({brand:"mi"})
// .then(value=>{
//     console.log(value);
// })
// .catch(error=>{
//     console.log(error);
// })


//update
async function updateData() {
        

    let result = await dbConnect();
    let data = await result.updateMany(
        { brand: "jbl" },
        { $inc: { price: 100 } }
    );

    console.log(data)
}

// updateData();