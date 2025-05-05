import mongoose from 'mongoose';

export const connectDB = () => {
     mongoose.connect(process.env.MONGO_URI,{
          dbName: "Mern Stack Library Management System"
     }).then(() => {
          console.log("Database Connected Successfully");
     }).catch(err => {
          console.log('Error connecting to database:', err);
     });
}