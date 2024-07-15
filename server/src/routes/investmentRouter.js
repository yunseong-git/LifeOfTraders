import { Router } from "express";
import { investmentController } from "../controllers/investmentController";

/**코인 투자 현황 확인 라우터 */
export class investmentRouter {
  router;
  path = "/investment";
  controller;

  constructor() {
    this.router = Router();
    this.controller = new investmentController();
    this.init();
  }

  init() {
    //get method
    this.router.get("/mycoins" ,this.controller.getMyCoins.bind(this.controller)); //내 코인 조회
    this.router.get("/history" ,this.controller.getHistory.bind(this.controller)); //거래내역 조회
    this.router.get("/wait-orders" ,this.controller.getWaitOrders.bind(this.controller)); //예약 주문 조회
    this.router.get("/income" ,this.controller.getIncome.bind(this.controller)); //내 수입 조회
  }
}
