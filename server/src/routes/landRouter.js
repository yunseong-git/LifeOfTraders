import { Router } from "express";
import { landController } from "../controllers/landController";

/**부동산 자산 거래 라우터 */
export class landRouter {
  router;
  path = "/land";
  controller;

  constructor() {
    this.router = Router();
    this.controller = new landController();
    this.init();
  }

  init() {
    //get method
    this.router.get("/map",this.controller.getMap.bind(this.controller)); //부동산 매물이 포함된 지도 조회
    this.router.get("/:land-id",this.controller.getDetailsLand.bind(this.controller)); //부동산자산(id) 정보조회

    //post method
    this.router.post("/:land-id",this.controller.transactionLand.bind(this.controller)); //부동산자산(id) 거래
  }
}
