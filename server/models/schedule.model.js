import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Schedule = sequelize.define(
  "schedule",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ticket_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
export default Schedule;
