import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "A email with the same name has already exists"],
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: [true, "Name is missing"],
  },

  DayOfBirth: {
    type: Date,
    // required: [true, "Birthday is missing"],
  },

  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
