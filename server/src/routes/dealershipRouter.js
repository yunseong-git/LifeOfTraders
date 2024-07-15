import { Router } from "express";
import { dealershipController } from "../controllers/dealershipController";

/**차량 자산 거래 라우터 */
export class dealershipRouter {
  router;
  path = "/dealership";
  controller;

  constructor() {
    this.router = Router();
    this.controller = new dealershipController();
    this.init();
  }

  init() {
    //get method
    this.router.get("/",this.controller.getCars.bind(this.controller)); //전체 차량 매물 확인
    this.router.get("/:car-id",this.controller.getDetailsCar.bind(this.controller)); //차량자산(id) 정보조회

    //post method
    this.router.post("/:car-id",this.controller.transactionCar.bind(this.controller)); //차량자산(id) 거래
}
}