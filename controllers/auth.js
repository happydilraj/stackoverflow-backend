import users from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "User already Exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went worng...");
  }
};

export const login = async (req,res) => {
    const { email, password } = req.body
    
    try {
        const existingUser = await users.findOne({email})
        if(!existingUser){
            return res.status(404).json({message: "User don't Exist."});
        }
        const checkPassword = await bcrypt.compare( password,existingUser.password );
        
        if(!checkPassword)
        return res.status(404).json({message: "invalid credentials"});
        
        const token = jwt.sign({email: email, id: existingUser._id},process.env.JWT_SECRET,{expiresIn: "1h"})
        return res.status(200).json({result: existingUser, token})
        
    } catch (error) {
        return res.status(500).json({"message": error});
    }
}