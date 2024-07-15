import { car } from "../models/car/carModel";
import { carEvent } from "../models/car/carEventModel";
import { carTransaction } from "../models/car/carTransactionModel";
export class dealershipController {

  constructor() {
    this.car = new car(); //추후 모델로 변경
    this.carEvent = new carEvent(); //추후 모델로 변경
    this.carTransaction = new carTransaction(); //추후 모델로 변경
  }

  async getCars(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getDetailsCar(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async transactionCar(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
}
