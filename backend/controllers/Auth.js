const userModel = require("../models/user.js");
const bcryptjs = require('bcryptjs');

const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

// register user
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const existUser = await userModel.findOne({ email })
        if (existUser) {
            return res.status(401).json({ success: false, message: "User already Exist" })
        }
        const hasepassword = await bcryptjs.hashSync(password, 10)

        const newUser = new userModel({
            name, email, password: hasepassword
        })

        await newUser.save()

        res.status(200).json({ message: "user register successfully", newUser })
    } catch (error) {
        res.status(500).json({ success: false, message: "interanl server error" })
        console.log(error)
    }
}
// login
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid email" })
        }

        const ispassaowrdValid = bcryptjs.compareSync(password, user.password);
        // console.log(ispassaowrdValid);

        if (!ispassaowrdValid) {
            return res.status(404).json({ success: false, message: "Invalid password" })

        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE, { expiresIn: '1hr' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000, // 1 hour

        });

        res.status(200).json({ success: true, message: "Login successfully", user, token })

    } catch (error) {
        res.status(500).json({ success: false, message: "interanl server error" })
        console.log(error);
    }
}


// forget password
const forgetPassword = async (req, res) => {

    const { email } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ message: 'user not registered' })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE, { expiresIn: '10m' });

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sususalax393@gmail.com',
                pass: 'ntpb cupm sosq ohpv'
            }
        });

        var mailOptions = {
            from: 'sususalax393@gmail.com',
            to: email,
            subject: 'Reset password',
            text: `http://localhost:5173/resetPassword/${token}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return res.json({ message: 'Error sending email' })
            } else {
                return res.json({ status: true, message: 'Email sent' })
            }
        });

    } catch (error) {
        console.log(error)
    }
}

// reset password
const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const deocded = await jwt.verify(token, process.env.JWT_SECRETE);
        const id = deocded.id;
        const hashedPassword = bcryptjs.hashSync(password, 10);
        await userModel.findByIdAndUpdate({ _id: id }, { password: hashedPassword });
        return res.json({ status: true, message: 'updated password' });
    } catch (error) {
        return res.json({ message: 'invalid token' });
    }
}


// logout
const Logout = async (req, res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({ message: "user Logout successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: "interanl server ereo" })
        console.log(error)
    }
}


module.exports = { register, login, forgetPassword, resetPassword, Logout }