const cloudinary_config = require("../../config/cloudinary");
const { foodModel } = require("../model/food.model");

module.exports = {

    addFood: async (req, res) => {
        var body = req.body;
        var file = req.file;

        if (file) {
            var imagePath = await cloudinary_config.uploader.upload(file.path);
        }

        if (!file) {
            var imagePath = body.image;
        }

        let food = new foodModel({
            ...body,
            image: imagePath.secure_url,
            cloudinaryId: imagePath.public_id,
        });

        food = await food.save();

        if (!food) {

            return res.status(500).json({ msg: "couldn't save new recipe" });
        } else {

            return res.status(201).json({ msg: "new recipe added successfully", data: food });
        }


    },
    deleteFood: async (req, res) => {
        try {

            var del = await foodModel.findByIdAndDelete(req.query.id);

            if (del) {

                return res.status(201).json({ msg: "success" })

            }

        } catch (err) {
            return res.status(500).json({ msg: err });

        }

    },
    getAllFood: async (req, res) => {
        try {

            var data = await foodModel.find().sort({
                name: "desc"
            });

            return res.status(200).json({ data: data })

        } catch (err) {

            return res.status(500).json({ msg: err });
        }
    },
    getSingleFood: async (req, res) => {

        try {

            var data = await foodModel.findById(req.query.id);
            if (!data) {

                res.status(400).json({ msg: "couldn't fetch data" });
            } else {

                res.status(200).json({ data: data });
            }
        } catch (err) {

            res.status(500).json(err);
        }
    },
    getFoodByCategory: async (req, res) => {
        try {

            var req = await foodModel.find({ category: req.query.category }).sort(
                { "name": -1, }
            );

            if (!req) {

                return res.status(400).json({ msg: "No food found for the specified parameter" })
            }

            return res.status(200).json({ data: req });
        }
        catch (err) {
            return res.status(500).json({ err });
        }
    },
    getByName: async (req, res) => {
        try {

            var req = await foodModel.find().sort(
                { name: "desc" }
            )
            // const query = req.params.filter;
            return res.status(200).json({ data: req });

        }
        catch (err) {

            return res.status(500).json({ err: err });
        }
    }


}