const jwt = require("jsonwebtoken");
const { secret } = require("../config/config");
const { authModel } = require('../src/model/auth.model')

module.exports = {

    verifyToken: (req, res, next) => {
        let token = req.get("Authorization");

        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized!" });
            }
            req.userAccess = decoded.id;
            req.user = decoded;
            next();
        });
    },
    verifyUser: async (req, res, next) => {
        let accessId = req.get("userAccess");

        if (!accessId) {

            return res.status(403).send({ message: "Anonymous user" });
        } else {

            var user = await authModel.findById(accessId);
            if (!user) return res.status(403).json({ msg: "user does not exist" });

            next();
        }


    }

}