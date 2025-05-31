import User from '../models/usermodel';

// Find a user by email
export const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error;
  }
};


export const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};