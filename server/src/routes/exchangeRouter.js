import { Router } from "express";
import { exchangeController } from "../controllers/exchangeController";

/**코인 거래소 라우터 */
export class exchangeRouter {
    router;
    path = "/exchange";
    controller;
    
    constructor() {
        this.router = Router();
        this.controller = new exchangeController;
        this.init();
    }

    init() {
        //get method
        this.router.get("/:coin-id",this.controller.getCoin.bind(this.controller)); //해당 코인 차트 조회
        this.router.get("/details/:coin-id",this.controller.getCoinDetails.bind(this.controller)); //해당 코인 상세정보 조회(가격제외)
        //post method
        this.router.post("/:coin-id",this.controller.transactionCoin.bind(this.controller)); //해당 코인 거래
    }
}