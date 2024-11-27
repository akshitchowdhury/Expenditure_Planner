const mongoose = require("mongoose")


const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://raikamiryu:x7wbbaMNhTRbd9RN@cluster0.iixah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Mongo DB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;

// 