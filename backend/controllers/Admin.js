const userModel = require("../models/user");

// get user
const Getuser = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ message: "intenral server error" })
        console.log(error)
    }
}



// delete user
const deletUser = async (req, res) => {
    try {
        const userId = req.params.id
        const checkAdmin = await userModel.findById(userId)

        if (checkAdmin.role == 'admin') {
            return res.status(409).json({ message: "you can not delete yourself" })
        }

        const user = await userModel.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        res.status(200).json({ message: "user delet successfully ", user })

    } catch (error) {
        res.status(500).json({ message: "intenral server error" })
        console.log(error)
    }
}


// make admin of a user 
const makeAdmin = async (req, res) => {
    const userId = req.params.id;
    const { name, email, role } = req.body;

    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { role: "admin" },
            { new: true, runValidators: true }
        );

        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { Getuser, deletUser , makeAdmin};