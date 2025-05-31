import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  dietaryPreferences: { type: String },
  allergies: { type: String },
  role: { type: String, default: 'user' }
});

const User = mongoose.model('User', userSchema);

export default User;