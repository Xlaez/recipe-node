const { Router } = require("express");
const { addFood, deleteFood, getAllFood, getFoodByCategory, getByName, getSingleFood } = require("../src/controllers/food.controller");
const { verifyToken, verifyUser } = require('../middlewares/middlewares')

const router = Router();

router.route('/').post(addFood).get(getAllFood);
router.route('/single').get(getSingleFood);
router.route('/category').get(getFoodByCategory);
router.route('/name/:filter').get(getByName);
router.route('/del_food').delete(verifyUser, verifyToken, deleteFood);

module.exports.foodRouter = router;