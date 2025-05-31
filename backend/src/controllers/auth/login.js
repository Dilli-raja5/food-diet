import bcrypt from 'bcryptjs';
import { generateToken } from '../../utils/tokenUtils.js';
import { findUserByEmail } from '../../data/userRepository.js';
import { loginSchema } from '../../validation/authValidation.js';
import { ZodError } from 'zod';

const isZodError = (error) => {
  return error instanceof ZodError;
};

const login = async (req, res) => {
  try {
    const parsedData = loginSchema.parse(req.body);
    const { email, password } = parsedData;

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        status: false,
        message: 'No user exists with this email, please sign up!',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        status: false,
        message: 'Invalid user credentials!',
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        status: false,
        message: 'Please verify your email before logging in.',
      });
    }

    const tokens = generateToken(user.id, user.email);

    res.status(200).json({
      status: true,
      message: 'Login successful!',
      user: {
        fullName: user.fullName,
        email: user.email,
        userID: user._id,
        role: user.role,
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

export default login;