import { Router } from "express";
import { myPageController } from "../controllers/myPageController";

/**실물 자산 현황 및 리워드를 수령하는 라우터 */
export class myPageRouter {
  router;
  path = "/myPage";
  controller;

  constructor() {
    this.router = Router();
    this.controller = new myPageController();
    this.init();
  }

  init() {
    //get Method
    this.router.get("/" ,this.controller.getMyPage.bind(this.controller)); //메인페이지
    this.router.get("/cars" ,this.controller.getMyCars.bind(this.controller)); //내 차량 전체 보기
    this.router.get("/lands" ,this.controller.getMyLands.bind(this.controller)); //내 부동산 전체 보기

    this.router.get("/rewards" ,this.controller.getAllRewards.bind(this.controller)); //총 자산 리워드 수령
    this.router.get("/cars/rewards" ,this.controller.getCarsRewards.bind(this.controller)); //내 차량 전체 리워드 수령
    this.router.get("/lands/rewards" ,this.controller.getLandsRewards.bind(this.controller)); //내 부동산 전체 리워드 수령
  }
}
