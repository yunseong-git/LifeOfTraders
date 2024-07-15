import { coin } from "../models/coin/coinModel";
import { coinEvent } from "../models/coin/coinEventModel";
import { coinTransaction } from "../models/coin/coinTransactionModel";
export class exchangeController {
  //모델등록

  constructor() {
    this.coin = new coin(); //추후 모델로 변경
    this.coinEvent = new coinEvent(); //추후 모델로 변경
    this.coinTransaction = new coinTransaction(); //추후 모
  }

  async getCoin(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getCoinDetails(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async transactionCoin(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
}
