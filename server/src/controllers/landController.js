import { land } from "../models/realestate/landModel";
import { landEvent } from "../models/realestate/landEventModel";
import { landTransaction } from "../models/realestate/landTransactionModel";

export class landController {
  //모델등록

  constructor() {
    this.land = new land(); //추후 모델로 변경
    this.landEvent = new landEvent(); //추후 모델로 변경  
    this.landTransaction = new landTransaction(); //추후 모
    
  }

  async getMap(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getDetailsLand(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  } 
  async transactionLand(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }

}
