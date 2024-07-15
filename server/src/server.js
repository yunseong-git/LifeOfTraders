import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { Router } from "express";

import { routers } from "./routes";
import checkDatebaseConnection from "./middleware/checkDatabaseConnection";

dotenv.config();

(async () => {
  const app = express();

  app.use(cors()); //접근 가능 도메인을 제한
  app.use(helmet()); //http header 보안
  app.use(express.json()); //받는형식을 제한
  app.use(express.urlencoded({ extended: true, limit: "700mb" })); //next();

  checkDatebaseConnection();

  //라우터 등록
  routers.forEach((router) => {
    app.use(router.path, router.router);
  });

  //에러 처리 미들웨어
  app.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({ message: err.message || "서버에서 에러가 발생하였습니다." });
  });
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`${PORT} 포트에서 서버가 시작되었습니다.`);
  });

})();
