import { Router } from "express";
import { homeController } from "../controllers/homeController";

/**메인 페이지 라우터 */
export class homeRouter {
    router;
    path = "/home";
    controller;
    
    constructor() {
        this.router = Router();
        this.controller = new homeController;
        this.init();
    }

    init() {
        //get Method
        this.router.get("/" ,this.controller.getMainPage.bind(this.controller)); //메인페이지
        this.router.get("/login" ,this.controller.getLoginPage.bind(this.controller)); //로그인페이지
        this.router.get("/register" ,this.controller.getRegisterPage.bind(this.controller)); //회원가입페이지

        //post Method
        this.router.post("/login" ,this.controller.login.bind(this.controller)); //로그인
        this.router.post("/logout" ,this.controller.logout.bind(this.controller)); //로그아웃
        this.router.post("/register" ,this.controller.register.bind(this.controller)); //회원가입
        this.router.post("/refresh" ,this.controller.tokenRefresh.bind(this.controller)); //토큰 리프레쉬
        this.router.post("/reset" ,this.controller.resetPassword.bind(this.controller)); //비밀번호 재설정

        //delete Method
        this.router.delete("/resign" ,this.controller.resign.bind(this.controller)); //회원탈퇴
    }
}