import User from "../model/userModel";

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
}

const changeAdmin = async (req, res) => {
  const { userId, admin } = req.body;
  const oldUser = await User.findById(userId);
  oldUser.admin = admin;
  oldUser.save();
  res.json(oldUser);
}

module.exports = { getUsers, changeAdmin };