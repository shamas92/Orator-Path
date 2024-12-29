import mongoose from 'mongoose';
let initialized = false;
export const connect = async () => {
  mongoose.set('strictQuery', true);
  if (initialized) {
    console.log('MongoDB already connected');
    return;
  }
  try {
    
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'orator-path',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
    initialized = true;
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};

//hola
console.log('MONGODB_URI:', process.env.MONGODB_URI);

