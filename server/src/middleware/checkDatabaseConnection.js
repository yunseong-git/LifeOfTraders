import database_MySQL from "../databases/prismaClient";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function checkDatebaseConnection() {

  function checkMysqlConnection() {
    try {
      database_MySQL.$connect();
      console.log("MySQL 연결 완료");
    } catch (error) {
      console.error("MySQL 연결 실패", error);
    }
  }

  function checkMongoConnection() {
    try {
      mongoose.connect(process.env.MONGODB_DATABASE_URL);
      console.log("MongoDB 연결 완료");
    } catch (error) {
      console.error("MongoDB 연결 실패", err);
    }
  }

  checkMysqlConnection();
  checkMongoConnection();
}

export default checkDatebaseConnection;