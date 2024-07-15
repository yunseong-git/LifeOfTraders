import { user } from "../models/userModel";
export class homeController {
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
   async getMainPage(req, res, next) {
     try {
       res.status(200).json({});
     } catch (err) {
       next(err);
     }
   }
   async getLoginPage(req, res, next) {
     try {
       res.status(200).json({});
     } catch (err) {
       next(err);
     }
   }
   async getRegisterPage(req, res, next) {
     try {
       res.status(200).json({});
     } catch (err) {
       next(err);
     }
   }
   async login(req, res, next) {
     try {
       res.status(200).json({});
     } catch (err) {
       next(err);
     }
   }  
   async logout(req, res, next) {
     try {
       res.status(200).json({});
     } catch (err) {
       next(err);
     }
   }   
    async register(req, res, next) {
      try {
        res.status(200).json({});
      } catch (err) {
        next(err);
      }
    } 
    async tokenRefresh(req, res, next) {
      try {
        res.status(200).json({});
      } catch (err) {
        next(err);
      }
    } 
    async resetPassword(req, res, next) {
      try {
        res.status(200).json({});
      } catch (err) {
        next(err);
      }
    } 
    async resign(req, res, next) {
      try {
        res.status(200).json({});
      } catch (err) {
        next(err);
      }
    } 
}
