import UserModel from "../models/UserModel";

export const getUserList = async (req, res) => {
  const userListFromDB = await UserModel.findAll();
  console.log(userListFromDB);
  return res.send({ message: "message" });
};
