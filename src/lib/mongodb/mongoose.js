import mongoose from "mongoose";

let initialize = false;

export const connect = async () => {
mongoose.set('strictQuery', true);
if (initialize) {
    console.log('MongoDB already Connected');
    return;
}

try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName:"oratorpath",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB Connected Successfully');
    initialize = true;
} catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
}
};