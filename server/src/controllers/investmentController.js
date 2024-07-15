import { coin } from "../models/coin/coinModel";
import { coinEvent } from "../models/coin/coinEventModel";
import { coinTransaction } from "../models/coin/coinTransactionModel";

export class investmentController {
  //모델등록

  constructor() {
    this.coin = new coin(); //추후 모델로 변경
    this.coinEvent = new coinEvent(); //추후 모델로 변경
    this.coinTransaction = new coinTransaction(); //추후 모델로 변경
  }

  async getMyCoins(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getHistory(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getWaitOrders(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getIncome(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
}
