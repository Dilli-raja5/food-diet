import bcrypt from 'bcryptjs';
import { ZodError } from 'zod';
import { registerSchema } from '../../validation/authValidation.js';
import { findUserByEmail, createUser } from '../../data/userRepository.js';
import { generateToken } from '../../utils/tokenUtils.js';

const isZodError = (error) => error instanceof ZodError;

const register = async (req, res) => {
  try {
    const parsedData = registerSchema.parse(req.body);
    const { name, email, password, age, dietaryPreferences, allergies } = parsedData;

    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: 'Email already registered. Please login instead.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser({
      fullName: name,
      email,
      password: hashedPassword,
      age,
      dietaryPreferences,
      allergies,
    });

    const tokens = generateToken(newUser.id, newUser.email);

    return res.status(201).json({
      status: true,
      message: 'Registration successful!',
      user: {
        fullName: newUser.fullName,
        email: newUser.email,
        userID: newUser._id,
        role: newUser.role,
      },
      tokens,
    });
  } catch (error) {
    if (isZodError(error)) {
      return res.status(400).json({
        status: false,
        message: 'Validation failed',
        errors: error.errors,
      });
    }

    console.error(error);
    res.status(500).json({ status: false, message: 'Server error!' });
  }
};

export default register;