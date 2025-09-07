import User from "../models/user.js";

export const createUserService = async (data) => {
    try {
        let newUser = new User(data);
        newUser = await newUser.save();
        return {success : true, user:newUser}
    } catch (error) {
        console.log({error});
        return {
            success: false,
            message: error.message || "Failed to create user",
            errors: error.errors || null, // contains field-level details (phone, email etc.)
        };
    }
}

export const getUserDetailsWithEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
        if (user) {
            return user
        }
        return false
    } catch (error) {
        return false
    }
}

export const getAllUsersService = async () => {
    try {
        const allUsers = await User.find();
        return { success: true, allUsers };

    } catch (error) {
        return { success: false }
    }
}
