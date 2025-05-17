// controllers/user.controllers.js
import asyncHandler from '../utils/asyncHandler.js'; // Corrected import

const registerUser = asyncHandler(async (req, res) => {
    // Your async logic here
    // For example, if you were actually registering a user:
    // const { username, email, password } = req.body;
    // if (!username || !email || !password) {
    //     return res.status(400).json({ message: "All fields are required" });
    // }
    // const user = await User.create({ username, email, password });
    // return res.status(201).json({ message: "User registered successfully", user });

    // For now, just the placeholder:
    res.status(200).json({
        message: "Register is working"
    });
});

export { registerUser };