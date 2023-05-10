const mongoose  = require("mongoose")

mongoose.connect("mongodb://localhost:27017/productManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Established connection to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB: ", err));
