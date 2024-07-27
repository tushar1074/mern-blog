import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const {username, email, password } = req.body; 
  const hashedPassword = bcryptjs.hashSync(password, 10);

    if(!username || !email || !password || username ==='' || email === '' || password === ''){
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = new User({
        username,
        email,
        password : hashedPassword
    });

    try {
        await newUser.save();
        res.status(201).json( 'User created successful');
    } catch (error) {
        next(error);
    }


};




