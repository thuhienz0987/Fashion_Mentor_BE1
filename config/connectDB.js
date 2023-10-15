import mongoose from "mongoose";
// database connection
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://thuhien:thuhien1234@cluster0.3dskz0p.mongodb.net/FashionMentorShip",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connect successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
