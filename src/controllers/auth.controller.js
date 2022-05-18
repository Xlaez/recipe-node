const { compareSync, hashSync } = require("bcrypt");
const { sign } = require('jsonwebtoken');
const { secret } = require("../../config/config");
const { authModel } = require("../model/auth.model")

// const { schedule } = require('node-cron')

// schedule('* * * * *', () => {
// console.log('running a task every minute')
// })
getToken = (user) => {

    return sign({ id: user._id }, secret, {
        expiresIn: 86400
    });
}

module.exports = {

    signup: async (req, res) => {
        try {
            var isUser = await authModel.findOne({ email: req.body.email });
            if (isUser) {

                return res.status(400).json({ msg: 'User already exists' });
            } else {

                var user = new authModel({

                    email: req.body.email,
                    password: await hashSync(req.body.password, 11),
                });

                user = await user.save();
                var token = getToken(user);
                const data = {
                    token,
                    userId: user._id
                }
                return res.status(201).json({ data: data })
            }

        } catch (error) {
            res.status(500).json({ error: error });
        }

    },
    login: async (req, res) => {

        try {

            var isUser = await authModel.findOne({ email: req.body.email });

            if (!isUser) {

                res.status(500).json({ msg: "user does not exist" });
            } else {


                var verify = compareSync(req.body.password, isUser.password);

                if (!verify) return res.status(403).json({ msg: "wrong password" })

                var token = await getToken(isUser);


                const data = {

                    token: token,
                    userId: isUser._id,
                }
                res.status(200).json({ data: data });
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }
}

