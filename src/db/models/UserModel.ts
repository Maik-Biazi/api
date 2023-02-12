import { Model, DataTypes } from "sequelize";
import {sequelize} from '../config/database'

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    tableName: "user",
    timestamps: false,
    sequelize
  }
);
export default UserModel
