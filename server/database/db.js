import mongoose from "mongoose";

const URL ="mongodb+srv://user:helloriya30@blogweb.r2eid.mongodb.net/Blog?retryWrites=true&w=majority"
const Connection = async() => {
    try{

        await mongoose.connect(URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        });
        console.log("Database successfully connected");
    }
    catch(error){
        console.log("Error in connection", error);
    }
}

export default Connection;

// useNewUrlParser -> to tell mongo db the current url of mongo is depricated so use new.

// useUnifiedTopology -> current server discovery and monitoring engine are depricated so use new.

//find() function in mongo is depricated so not use it. New function is findOne()