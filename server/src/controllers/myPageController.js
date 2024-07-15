import { user } from "../models/userModel";
export class myPageController {
  //모델등록

  constructor() {
    this.user = new user(); //추후 모델로 변경
  }

  /* 각 컨트롤 함수들 등록
    async getReservation(req, res, next) {
      try {
        res.status(200).json({});
      } catch (err) {
        next(err);
      }
    }*/
  async getMyPage(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getMyCars(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getMyLands(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getAllRewards(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getCarsRewards(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
  async getLandsRewards(req, res, next) {
    try {
      res.status(200).json({});
    } catch (err) {
      next(err);
    }
  }
}
