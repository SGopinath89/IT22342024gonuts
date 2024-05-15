const port = 4000;

//import  dependencies
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");

//include path from the express server->using path module can get access to backend tree in express app.
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://gonutswithdonuts:FK8Vz0WiUBjRypE7@cluster0.rvl0vlo.mongodb.net/GONUTS_WITH_DONUTS")


//API 

app.get("/", (req, res)=>{
    res.send("Express App is Running");
})


// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage});

// Creating upload endpoing for images
app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res)=>{
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})


// Schema for creating products
const Product = mongoose.model("Product", {
    id: {
        type: String,
        required: true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }

})


// Add product to database

app.post('/addproduct', async(req, res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id= Number(last_product.id) + 1;
        id = id.toString();
    }
    else{
        id = "1";
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
        description:req.body.description,
    });
    console.log(product);
    //save product in database
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})


// creating API for deleting products

app.post('/removeproduct', async (req, res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// creating API for getting all products
app.get('/allproducts', async (req, res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})


app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on port "+port);
    }
    else{
        console.log("Error: "+error);
    }
});